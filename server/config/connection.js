const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Sunderfire:RebelSc0ut9!7@cluster0.iqy4hlb.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = mongoose.connection;
