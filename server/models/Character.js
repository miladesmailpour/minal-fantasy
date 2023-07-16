const { Schema, model } = require("mongoose");

const InventoryItemSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
});

const Character = model("Character", PcSchema);

module.exports = Character;
