const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  level: {
    type: Number,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  mp: {
    type: Number,
    required: true,
  },
  str: {
    type: Number,
    required: true,
  },
  agi: {
    type: Number,
    required: true,
  },
  def: {
    type: Number,
    required: true,
  },
  mdef: {
    type: Number,
    required: true,
  },
  sprite: {
    type: String,
    required: true,
  },
});

const Class = model("Class", classSchema);

module.exports = Class;
