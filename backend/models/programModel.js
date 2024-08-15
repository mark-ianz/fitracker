const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setSchema = new Schema({
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
});

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
  exercisesId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
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

// Steps for saving programs:
// 1. Itterate to all program workouts e.g: Itterating to push day, back day and leg day
// 2. Each itteration will get the exercises and upload each on the /exercises and every upload will return an id
// 3. The id will be the reference for the exercises property of the program workout
// 4. Upload the whole program on the database and send the response
// This method allows the /exercises to be more flexible, it also allows the users to create their own /exercises
// Statics
programSchema.statics.saveAll = async () => {
  return { message: "Save All!" };
};

module.exports = mongoose.model("Program", programSchema);
