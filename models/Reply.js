const mongoose = require('mongoose');

const replySchema = mongoose.Schema({
  reply: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comment: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    },
  },
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;

