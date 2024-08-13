const express = require("express");
const router = express.Router();
const {
  get_all_workout,
  get_one_workout,
  post_workout,
  delete_one_workout,
  update_workout,
} = require("../controller/workoutController");
const workoutValidator = require("../utils/workoutValidator");
const requireAuth = require("../middlewares/requireAuth");

// Require Auth
router.use(requireAuth);

// Get all workouts
router.get("/all", get_all_workout);

// Get single workout
router.get("/:id", get_one_workout);

// Post a new workout
router.post("/new", workoutValidator, post_workout);


// Delete a workout
router.delete("/:id", delete_one_workout);

// Update a workout
router.patch("/:id", update_workout);

module.exports = router;
