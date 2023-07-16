const { schema, model, Schema } = require("mongoose");

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 150,
    trim: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 150,
        trim: true,
      },
      category: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 150,
        trim: true,
      },
      level: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const Shop = model("Shop", shopSchema);
