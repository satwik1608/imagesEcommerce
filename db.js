const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/printshop").then("Connected to mongodb");

module.exports = mongoose;
