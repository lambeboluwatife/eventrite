const express = require("express");
const moment = require("moment");
const router = express.Router({ mergeParams: true });
const { ensureAuthenticated } = require("../config/auth");
const Event = require("../models/Event");
const Like = require("../models/Like");

// Like Event
router.post("/", ensureAuthenticated, (req, res) => {
  let eventId = req.params.id;
  let currentUserId = req.user.id;
  Event.findById(eventId, (err, event) => {
    if (err) {
      console.log(err);
      res.redirect("/events");
    } else {
      Like.findOne(
        {
          "eventDetails.id": eventId,
          "author.id": currentUserId,
        },
        (err, likeEvent) => {
          if (!likeEvent) {
            const eventDetails = {
              name: event.name,
              location: event.location,
              description: event.description,
              id: event.id,
            };
            const date = moment().format("MMM D, YYYY");
            const time = moment().format("LT");
            const author = {
              id: req.user.id,
              username: req.user.username,
              name: req.user.name,
            };

            const newLike = new Like({
              eventDetails,
              author,
              date,
              time,
            });
            Like.create(newLike, (err, like) => {
              if (err) {
                req.flash("error", "Something went wrong");
                console.log(err);
              } else {
                // save like
                like.save();
                event.likes.push(like);
                event.save();
                req.flash("success", "Like");
                res.redirect("/events/" + event._id);
              }
            });
          } else {
            Like.findByIdAndRemove(
              {
                _id: likeEvent.id,
              },
              (err) => {
                if (err) {
                  throw err;
                } else {
                  res.redirect("/events/" + event._id);
                }
              }
            );
            event.likes.pop(likeEvent.id);
            event.save();
          }
        }
      );
    }
  });
});

module.exports = router;
