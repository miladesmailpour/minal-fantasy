const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  level: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
