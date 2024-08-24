const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = require("mongodb");
const Program = require("./programModel");

const splitSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No split description provided"
    },
    programs: [{ type: ObjectId, required: true }], // Array of programID
    user: {
      type: ObjectId,
      required: true,
    },
  },
  { timeStamps: true }
);

// Steps for saving programs:
// 1. Itterate to all program workouts e.g: Itterating to push day, back day and leg day
// 2. Each itteration will get the exercises and upload each on the /exercises and every upload will return an id
// 3. The id will be the reference for the exercises property of the program workout
// 4. Upload the whole program on the database and send the response
// This method allows the /exercises to be more flexible, it also allows the users to create their own /exercises
// Statics

splitSchema.statics.saveProgramsAndGetIds = async (programs) => {
  const result = await Program.insertMany(programs);
  const ids = result.map((program) => program._id);

  return ids;
};

module.exports = mongoose.model("Split", splitSchema);
