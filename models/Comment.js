const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
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

