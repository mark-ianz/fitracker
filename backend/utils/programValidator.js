const { body } = require("express-validator");

const programValidator = [
  body("programs.*.workoutName")
    .notEmpty()
    .withMessage("Workout name is required")
    .trim(),

  body("programs.*.muscleTargets")
    .notEmpty()
    .withMessage("Muscle targets are required")
    .trim(),

  body("programs.*.workoutDescription")
    .notEmpty()
    .withMessage("Workout description is required")
    .trim(),

  body("programs.*.exercises")
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
    
  body("workouts.*.exercises.*.id").optional (),

  body("workouts.*.exercises.*.sets").default({ reps: 0, weight: 0 }),
]

module.exports = programValidator;