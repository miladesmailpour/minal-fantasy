const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lvl: {
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
  int: {
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
  agi: {
    type: Number,
    required: true,
  },
  sprite: {
    type: String,
  },
});

classSchema.methods.modifyStat = function (effect) {
  const { stat, value } = effect;
  if (this[stat]) {
    this[stat] += value;
  }
};

const Class = model("Class", classSchema);

module.exports = Class;
