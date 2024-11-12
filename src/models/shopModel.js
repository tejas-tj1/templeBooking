const mongoose = require("mongoose");
//Shop Booking Schema
const Shop = new mongoose.Schema({
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
  email: {
    type: String,
    required:true,
    unique:true
  },
  date: {
    type: Date,
    required:true
  },
  category: {
    type: String,
    required:true
  }
});

const shopBook = mongoose.model("shopBook", Shop);
module.exports = shopBook;
