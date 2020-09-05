const router = require("express").Router();
const db = require("../models");

// gets all workouts from database and sends to server
router.post('/api/workouts', (req, res) => {
  db.find({})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    console.log("sent to res from post!")
});

// gets all workouts from database and sends to server
router.get('/api/workouts', (req, res) => {
  db.find({})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    console.log("sent to res from get!")
});

router.get('/stats', (req, res) => {
  res.render('./stats');
});

// renders the html page
router.get("/exercise", (req, res) => {
  res.render('./exercise.html');
});

// gets new workout data and creates a new document in the database
router.put('/api/workouts/undefined', ({ body },res) => {
  db.insertMany({ exercises: [ body ] })
    .then(db => {
      res.json(db)
    })
    .catch(err => {
      res.status(400).json(err);
    });
    console.log("inserted many!");
});

// updates workouts by id 
router.put("/api/workouts/:id", (req, res) => {
  db.update({_id: req.params.id},{ $push: {exercises: req.body }})
    .then(db => {
      res.send(db)
    })
    .catch(err => {
      res.status(400).json(err)
    });
    console.log("updated!");
});

router.get('/api/workouts/range', (req, res) => {
  db.find({})
    .sort({day: -1})
    .then(dbworkout => {
      res.json(dbworkout)
    })
    .catch(err => {
      res.status(400).json(err)
    });
})

module.exports = router;