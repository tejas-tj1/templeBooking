const mongoose = require("mongoose");

//VIP Booking Schema
const Vip = new mongoose.Schema({
  uname: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required:true
  },
  adhar: {
    type: Number,
    unique:true,
    required:true
  },
  mobile: {
    type: Number,
    unique:true,
    required:true
  },
  email: {
    type: String,
    unique:true,
    required:true
  },
  date: {
    type: Date,
    required:true
  }
});

const vipBook = mongoose.model('vipBook', Vip);

module.exports = vipBook;
