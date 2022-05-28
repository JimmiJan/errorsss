const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  hotal: {
    type: String,
  },
  cityname: {
    type: String,
  },
  hotalrent: {
    type: String,
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;
