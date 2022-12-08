const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  comment: {
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
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reply"
    }
  ],
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

