const { Schema, model } = require("mongoose");

const enemySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  str: {
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
  xp: {
    type: Number,
    required: true,
  },
  sprite: {
    type: String,
  },
});

const Enemy = model("Enemy", enemySchema);

module.exports = Enemy;
