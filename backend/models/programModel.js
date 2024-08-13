const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId,
  },
  _id: false,
});

const workoutSchema = {
  workoutName: {
    type: String,
    required: true,
  },
  muscleTargets: {
    type: String,
    required: true,
  },
  workoutDescription: {
    type: String,
    required: true,
  },
  exercises: [exercisesSchema],
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
