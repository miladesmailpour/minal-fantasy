const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

// User Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
  },
  userName: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uniqueCaseInsensitive: true,
    validate: {
      validator: function (email) {
        // Email validation using a regular expression
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
});

UserSchema.pre("save", async function (next) {
  // Pre-save hook to fill the userName field from the email
  if (!this.userName) {
    this.userName = this.email.split("@")[0].toLowerCase();
    this.email = this.email.toLowerCase();
    this.firstName = this.firstName.toLowerCase();
    if (this.lastName) {
      this.lastName = this.lastName.toLowerCase();
    } else {
      this.lastName = "";
    }
  }
  // set up pre-save middleware to create password
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Apply unique validator plugin
UserSchema.plugin(uniqueValidator);

// // compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// User model
const User = model("User", UserSchema);

module.exports = User;
