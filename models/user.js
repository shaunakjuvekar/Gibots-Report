const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    gender: String,
    nat: String,
    dob: {
      date: String,
      age: Number
    }
  });
  
  module.exports = mongoose.model("Person",personSchema);