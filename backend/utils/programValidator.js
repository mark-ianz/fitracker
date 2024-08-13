const { body } = require("express-validator");

const programValidator = [
  body("title")
    .notEmpty()
    .withMessage("Program title cannot be empty")
    .trim()
    .escape(),

  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .trim()
    .escape(),

  body("workouts").notEmpty().withMessage("Workouts list is required"),

  body("workouts.*.workoutName")
    .notEmpty()
    .withMessage("Workout name is required")
    .trim()
    .escape(),

  body("workouts.*.target")
    .notEmpty()
    .withMessage("Muscle targets are required")
    .trim()
    .escape(),

  body("workouts.*.workoutDescription")
    .notEmpty()
    .withMessage("Workout description is required")
    .trim()
    .escape(),

  body("workouts.*.exercises")
    .isArray ()
    .withMessage ("Exercises should be an array")
    .notEmpty()
    .withMessage ("Exercises are required"),

  body("workouts.*.exercises.*.exerciseName")
    .notEmpty()
    .withMessage("Exercise name is required"),
];

module.exports = programValidator;