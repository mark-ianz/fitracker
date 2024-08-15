const { body } = require("express-validator");

const programValidator = [
  body("title").notEmpty().withMessage("Program title cannot be empty").trim(),

  body("description").notEmpty().withMessage("Description is required").trim(),

  body("workouts")
    .notEmpty()
    .withMessage("Workouts list is required")
    .isArray()
    .withMessage("Workouts list should be an array")
    .custom((workouts) => {
      if (workouts.length <= 0) {
        throw new Error("Workouts list cannot be empty");
      }

      return true;
    }),

  body("workouts.*.workoutName")
    .notEmpty()
    .withMessage("Workout name is required")
    .trim(),

  body("workouts.*.muscleTargets")
    .notEmpty()
    .withMessage("Muscle targets are required")
    .trim(),

  body("workouts.*.workoutDescription")
    .notEmpty()
    .withMessage("Workout description is required")
    .trim(),

  body("workouts.*.exercises")
    .isArray()
    .withMessage("Exercises should be an array")
    .notEmpty()
    .withMessage("Exercises are required")
    .custom((exercises) => {
      if (exercises.length <= 0) {
        throw new Error("Exercises cannot be empty");
      }
      return true;
    }),

  body("workouts.*.exercises.*.exerciseName")
    .notEmpty()
    .withMessage("Exercise name is required"),

  body("workouts.*.exercises.*.sets").default({ reps: 0, weight: 0 }),
];

module.exports = programValidator;
