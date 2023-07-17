const { schema, model, Schema } = require("mongoose");

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 150,
    trim: true,
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
});

const Shop = model("Shop", shopSchema);

module.exports = Shop;
