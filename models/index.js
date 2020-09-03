const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true} };

const workoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: Array
}, opts);

workoutSchema.virtual('totalDuration')
  .get(function() {
    let arr = this.exercises.map(exercise => exercise.duration);

    return arr.reduce((a,b) => {
      return a + b
    }, 0);
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;