const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// User Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: false,
    trim: true
  },
  userName: {
    type: String,
    required: false,
    unique: true,
    trim: true
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
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true
  }
});

// Pre-save hook to fill the userName field from the email
UserSchema.pre('save', function (next) {
  if (!this.userName) {
    this.userName = this.email.split('@')[0];
  }
  next();
});

// Apply unique validator plugin
UserSchema.plugin(uniqueValidator);

// User model
const User = model('User', UserSchema);

module.exports = User;
