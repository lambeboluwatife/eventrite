const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  eventDetails: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
