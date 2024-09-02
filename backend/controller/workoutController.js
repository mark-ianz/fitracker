const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");
const { matchedData, validationResult } = require("express-validator");

const get_all_workout = async (req, res) => {
  // Get all workouts
  const userId = req.user._id;
  const sort = req.query.sort;

  let sortCriteria;
  switch (sort) {
    case "exercisesPerformed":
      sortCriteria = [
        {
          $addFields: {
            exercisesCount: {
              $size: "$exercisesPerformed",
            },
          },
        },
        { $sort: { exercisesCount: -1 } },
      ];
      break;
    case "date":
      sortCriteria = [
        {
          $sort: { createdAt: -1 },
        },
      ];
      break;
    default: {
      sortCriteria = [
        {
          $sort: { createdAt: -1 },
        },
      ];
    }
  }

  try {
    if (sort) {
      const workouts = await Workout.aggregate([
        {
          $match: { user: new mongoose.Types.ObjectId(userId) },
        },
        ...sortCriteria,
      ]);

      return res.json(workouts);
    }

    const workouts = await Workout.find({ user: userId }).sort({
      createdAt: -1,
    });

    // Send response
    res.json(workouts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was a server error. Please try again later." });
  }
};

const get_one_workout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout session not found" });
  }

  try {
    const workout = await Workout.findOne({ _id: id });
    if (!workout) {
      return res.status(404).json({ error: "Workout session not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was a server error. Please try again later." });
  }
};

const post_workout = async (req, res) => {
  const data = matchedData(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Errors:", errors);
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  try {
    const workout = new Workout(data);
    const uploaded = await workout.save();
    res.status(202).json(uploaded);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was a server error. Please try again later." });
  }
};

const delete_one_workout = async (req, res) => {
  const { id } = req.params;
  try {
    await Workout.findByIdAndDelete(id);
    return res.json({ message: "Successfully deleted." });
  } catch (error) {}
  res.json({ message: "Delete a workout" });
};

const update_workout = (req, res) => {
  res.json({ message: "Update a workout" });
};

module.exports = {
  get_all_workout,
  get_one_workout,
  post_workout,
  delete_one_workout,
  update_workout,
};
