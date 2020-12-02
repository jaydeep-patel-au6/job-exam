const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdby: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);