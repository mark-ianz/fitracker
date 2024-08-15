const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setSchema = new Schema(
  {
    reps: {
      type: Number,
      required: true,
      default: 0,
    },
    weight: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { _id: false }
);

const exercisesSchema = new Schema(
  {
    exerciseName: {
      type: String,
      required: true,
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
      unique: true,
    },
    sets: [setSchema],
  },
  { _id: false }
);

const programSchema = new Schema({
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
});

module.exports = mongoose.model("Program", programSchema);