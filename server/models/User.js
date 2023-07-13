const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// User Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  userName: {
    type: String,
    required: true,
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
  }
});

// Apply unique validator plugin
UserSchema.plugin(uniqueValidator);

// User model
const UserModel = model('User', UserSchema);

module.exports = UserModel;
