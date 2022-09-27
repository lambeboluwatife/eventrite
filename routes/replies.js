const express = require("express");
const router = express.Router({ mergeParams: true });
const { ensureAuthenticated } = require("../config/auth");
const Comment = require("../models/Comment");
const Reply = require("../models/Reply");

// Replies Create
router.post("/", ensureAuthenticated, (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) {
      console.log(err);
    } else {
        const reply = req.body.reply;
        const author = {
            id: req.user._id,
            username: req.user.username
        }
        const commentId = comment._id
        const newReply = new Reply({
            reply,
            commentId,
            author
        })
        Reply.create(newReply, (err, reply) => {
        if (err) {
          req.flash("error", "Something went wrong");
          console.log(err);
        } else {
          // save reply
          reply.save();
          comment.replies.push(reply);
          comment.save();
          res.redirect("back");
        }
      });
    }
  });
});

// // Edit Route
// router.get(
//   "/:comment_id/edit",
//   middleware.checkCommentOwnership,
//   (req, res) => {
//     Comment.findById(req.params.comment_id, (err, foundComment) => {
//       if (err) {
//         res.redirect("back");
//       } else {
//         res.render("comments/edit", {
//           campground_id: req.params.id,
//           comment: foundComment
//         });
//       }
//     });
//   }
// );

// // Comment Update
// router.put("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
//   Comment.findByIdAndUpdate(
//     req.params.comment_id,
//     req.body.comment,
//     (err, updatedComment) => {
//       if (err) {
//         res.redirect("back");
//       } else {
//         res.redirect("/campgrounds/" + req.params.id);
//       }
//     }
//   );
// });

// // Comment Destroy
// router.delete("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
//   Comment.findByIdAndRemove(req.params.comment_id, err => {
//     if (err) {
//       res.redirect("back");
//     } else {
//       req.flash("success", "Comment deleted");
//       res.redirect("/campgrounds/" + req.params.id);
//     }
//   });
// });

module.exports = router;
