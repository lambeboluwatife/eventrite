const express = require("express");
const router = express.Router();
const path = require("path");
const { ensureAuthenticated } = require("../config/auth");
const multer = require("multer");
const fs = require("fs");

// Event Model
const Event = require("../models/Event");

// Set Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname)
      );
    },
  });
  
  // Init Upload
  const upload = multer({
    storage: storage,
    limits: { fileSize: 2000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  });
  
  // Check File Type
  function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  }


//NEW - Show form to create new group
router.get("/host-event", ensureAuthenticated, (req, res) => {
    res.status(200).render("events/host-event");
});
  
// CREATE - Create new event
router.post(
    "/",
    ensureAuthenticated,
    upload.single("image"),
    (req, res) => {
      // get data from form and add to event array
      const name = req.body.name;
      const spot = req.body.spot;
      const location = req.body.location;
      const category = req.body.category;
      const description = req.body.description;
      const date = req.body.date;
      const start = req.body.start;
      const end = req.body.end;
      const price = req.body.price;
      const image = req.file.filename;
      const author = {
        id: req.user._id,
        username: req.user.username,
        name: req.user.name,
        image: req.user.image,
      };
  
      const newEvent = new Event({
        name,
        spot,
        location,
        category,
        description,
        date,
        start,
        end,
        price,
        image,
        author,
      });
  
      //  Create a new event and save to DB
      Event.create(newEvent, (err, newlyCreated) => {
        if (err) {
          console.log(err);
        } else {
          req.flash("success_msg", "Event Added");
          // redirect back to group page
          res.redirect("/dashboard");
        }
      });
    }
  );



// Events Page
router.get('/', (req, res) => {
  Event.find({}, (err, allEvents) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).render('events/index', {
        events: allEvents
      })
    }
  })
});

// SHOW - Show more info about an event
router.get("/:id", (req, res) => {
  Event.findById(req.params.id)
    .populate({
      path: "comments",
      populate: {
        path: "replies"
      }
    })
    .exec((err, foundEvent) => {
      if (err) {
        res.redirect("back");
      } else {
        Event.find({}, (err, allEvents) => {
          if (err) {
            res.redirect("back")
          } else {
            function getMultipleRandom(allEvents, num) {
              const shuffled = [...allEvents].sort(() => 0.5 - Math.random());
      
              return shuffled.slice(0, num);
            }
            let randEvents = getMultipleRandom(allEvents, 6);
            res.render("events/details", { 
              event: foundEvent,
              events: randEvents,
             });
          }
        })
      }
    });
});


// EDIT EVENT ROUTE
router.get("/:id/edit-event", ensureAuthenticated, (req, res) => {
  Event.findById(req.params.id, (err, foundEvent) => {
    res.render("events/edit-event", { event: foundEvent });
  });
});

// UPDATE EVENT ROUTE
router.put("/:id", upload.single("image"), (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync("./uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image;
  }

  Event.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      spot: req.body.spot,
      location: req.body.location,
      category: req.body.category,
      description: req.body.description,
      date: req.body.date,
      start: req.body.start,
      end: req.body.end,
      price: req.body.price,
      image: new_image,
    },
    (err, updatedEvent) => {
      if (err) {
        req.flash("error_msg", "An error occurred, couldn't update");
        res.status(500).redirect("/dashboard");
      } else {
        req.flash("success_msg", "Event Updated");
        res.status(200).redirect("/dashboard");
      }
    }
  );
});

// DESTROY EVENT ROUTE
router.delete("/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err, result) => {
    if (result.image != "") {
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch {
        console.log(err);
      }
    }
    if (err) {
      req.flash("error_msg", "An error occurred, couldn't delete");
      res.status(500).redirect("/dashboard");
    } else {
      req.flash("success_msg", "Event Deleted");
      res.status(200).redirect("/dashboard");
    }
  });
});

// Search for an event
router.post("/search", (req, res) => {
  const search = req.body.search;
  // Regular Expression starts here
  const newSearch = new RegExp(search, "i");
  // Regular Expression ends here
  Event.find(
    {
      $or: [
        { name: newSearch },
        { location: newSearch },
        { category: newSearch },
        { "author.username": newSearch },
      ],
    },
    (err, allSearch) => {
      if (err) {
        console.log(err);
      } else {
        res.render("events/search", {
          events: allSearch,
          search: search,
        });
      }
    }
  );
});

module.exports = router;