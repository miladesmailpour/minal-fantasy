const { Schema, model } = require("mongoose");

const EffectSchema = new Schema({
  stat: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  effect: {
    type: EffectSchema,
    required: true,
  },
});

const Item = model("Item", ItemSchema);

module.exports = Item;
