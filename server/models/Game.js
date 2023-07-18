const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 150,
    trim: true,
  },
  level: {
    type: Number,
    required: false,
    default: 0,
  },
  character: {
    type: Schema.Types.ObjectId,
    ref: "Character",
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
