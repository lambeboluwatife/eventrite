const express = require("express");
const moment = require("moment")
const router = express.Router({ mergeParams: true });
const { ensureAuthenticated } = require("../config/auth");
const Event = require("../models/Event");
const Comment = require("../models/Comment");

// Comments Create
router.post("/", ensureAuthenticated, (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      console.log(err);
      res.redirect("/events");
    } else {
        const comment = req.body.comment;
        const date = moment().format('MMM D, YYYY');
        const time = moment().format("LT")
        const author = {
            id: req.user._id,
            username: req.user.username,
            name: req.user.name
        }
        const newComment = new Comment({
            comment,
            author,
            date,
            time
        })
      Comment.create(newComment, (err, comment) => {
        if (err) {
          req.flash("error", "Something went wrong");
          console.log(err);
        } else {
          // save comment
          comment.save();
          event.comments.push(comment);
          event.save();
          req.flash("success", "Successfully added comment");
          res.redirect("/events/" + event._id);
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

// Comment Destroy
router.delete("/:comment_id", ensureAuthenticated, (req, res) => {
  Comment.findByIdAndRemove(req.params.comment_id, err => {
    if (err) {
      res.redirect("back");
    } else {
      req.flash("success", "Comment deleted");
      res.redirect("/events/" + req.params.id);
    }
  });
});

module.exports = router;
