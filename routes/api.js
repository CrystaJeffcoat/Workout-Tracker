const router = require("express").Router();
const Workout = require("../models");

router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then(db => {
      console.log("data" + db);
      res.json(db);
    })
    .catch(err => {
      res.send(400).json(err);
    })
});

router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  res.render("exercise.html");
});

router.get("api/workouts/:id", ({ body }, res) => {
  Workout.create(body)
    .then(db => {
      res.json(db)
    })
    .catch(err => {
      res.status(400).json(err)
    });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .sort({day: -1})
    .then(dbworkout => {
      console.log(dbworkout)
      res.json(dbworkout)
    })
    .catch(err => {
      res.status(400).json(err)
    });
})

module.exports = router;