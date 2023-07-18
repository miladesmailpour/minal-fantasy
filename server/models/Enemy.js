const { Schema, model } = require("mongoose");

const enemySchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "enemy",
  },
  hp: {
    type: Number,
    required: true,
    default: 100,
  },
  str: {
    type: Number,
    required: true,
    default: 10,
  },
  def: {
    type: Number,
    required: true,
    default: 5,
  },
  mdef: {
    type: Number,
    required: true,
    default: 3,
  },
  agi: {
    type: Number,
    required: true,
    default: 8,
  },
  xp: {
    type: Number,
    required: true,
    default: 50,
  },
  sprite: {
    type: String,
    required: true,
    default: "default-enemy-sprite.png",
  },
});

const Enemy = model("Enemy", enemySchema);

module.exports = Enemy;
