const { body } = require("express-validator");

const programValidator = [
  body ("user")
    .isMongoId ()
    .withMessage ("User ID is not valid")
    .trim (),

  body("programName")
    .notEmpty()
    .withMessage("Program name cannot be empty")
    .trim(),

  body("muscleTargets")
    .notEmpty()
    .withMessage("Muscle targets are required")
    .trim(),

  body("programDescription")
    .notEmpty()
    .withMessage("Program description is required")
    .trim(),

  body("exercises")
    .isArray()
    .withMessage("Exercises is not an array")
    .custom((exercises) => {
      if (exercises.length <= 0) {
        throw Error("Program exercises cannot be empty");
      }
      return true;
    }),

  body("exercises.*.exerciseName")
    .notEmpty()
    .withMessage("Exercise name is required"),

  body("exercises.*.sets").default({ reps: 0, weight: 0 }),

  body("exercises.*.id").optional(),
];

module.exports = programValidator;
