const { ObjectId } = require("mongodb");
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
  user: {
    type: ObjectId,
    required: true
  },
  programName: {
    type: String,
    required: true,
  },
  muscleTargets: {
    type: String,
    required: true,
  },
  programDescription: {
    type: String,
    required: true,
  },
  exercises: [exercisesSchema],
}, {timestamps: true});

/* programSchema.statics.saveProgramsAndGetIds = async (programs, user)=> {
  const result = await programSchema.insertMany (programs);
  return ["id1", "id2", "id3"]
} */

module.exports = mongoose.model("Program", programSchema);