const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Item = model("Item", ItemSchema);

module.exports = Item;
