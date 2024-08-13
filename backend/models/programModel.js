const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = {
  workoutName: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  workoutDescription: {
    type: String,
    required: true,
  },
  exercises: [
    {
      exerciseName: {
        type: String,
        required: true,
      },
    },
  ],
};

const programSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  workouts: {
    type: [workoutSchema],
    required: true,
  },
});

module.exports = mongoose.model("Program", programSchema);
