const mongoose = require("mongoose");
//Hall Booking Schema
const Hall = new mongoose.Schema({
  uname: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required:true
  },

  mobile: {
    type: Number,
    required:true,
    unique:true
  },
  date: {
    type: Date,
    required:true
  },
  purpose: {
    type: String,
    required:true
  },
  size: {
    type: String,
    required:true
  }
});

const hallBook = mongoose.model("hallBook", Hall);

module.exports = hallBook;
