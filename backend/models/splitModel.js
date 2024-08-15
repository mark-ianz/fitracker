const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = require("mongodb");

const splitSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  programs: {
    type: [
      {
        _id: { type: ObjectId, required: true },
      },
    ], // Array of programID
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
splitSchema.statics.saveAll = async () => {
  return { message: "Save All!" };
};

module.exports = mongoose.model("Split", splitSchema);
