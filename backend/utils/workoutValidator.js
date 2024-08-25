const { body } = require("express-validator");

const workoutValidator = [
  // The ".*" is a wildcard that matches any key in the object.

  // Validate the request body
  body("name") // Workout name
    .trim()
    .escape()
    .isString()
    .withMessage("Session name must be a string")
    .notEmpty()
    .withMessage("Session name cannot be empty"),

  body("exercisesPerformed") // Exercises performed
    .isArray()
    .withMessage("Exercises performed must be an array of objects.")
    .custom((array) => {
      if (array.length === 0) throw new Error("Add at least one exercise");
      return true;
    }),

  body("exercisesPerformed.*.id") // Exercise performed id
    .trim()
    .notEmpty(),

  body("exercisesPerformed.*.exerciseName") // Exercise name performed
    .trim()
    .escape()
    .isString()
    .withMessage("Exercises name must be a string")
    .notEmpty()
    .withMessage("Add an exercise name"),

  body("exercisesPerformed.*.sets") // Exercise set performed
    .isArray()
    .withMessage("Exercises performed must be an array")
    .custom((array) => {
      if (array.length === 0)
        throw new Error("There was an unfinished exercise");
      return true;
    }),

  body("exercisesPerformed.*.set.*") // All sets must have reps, duration and weight
    .custom((set) => {
      if (!set.reps || !set.weight)
        throw new Error("Set must have reps and weight");
      return true;
    }),

  body("exercisesPerformed.*.set.*.reps") // Reps must be an integer and positive
    .isInt({ min: 1 })
    .withMessage("Reps must be an integer and positive"),

  body("exercisesPerformed.*.set.*.duration") // Duration must be an integer and positive
    .optional()
    .default(0)
    .isInt()
    .withMessage("Duration must be an integer"),

  body("exercisesPerformed.*.set.*.weight") // Weight must be an integer and positive
    .isFloat()
    .withMessage("Weight must be an integer and positive"),

  body("user")
    .notEmpty()
    .withMessage("ID is empty")
    .isMongoId()
    .withMessage("ID is not valid"),

  body("tags") // Tags
    .trim()
    .escape()
    .default("Workout")
    .isString(),

  body("location") // Location
    .trim()
    .escape()
    .isString()
    .withMessage("Location must be a string"),

  body("description")
    .default("No workout description provided.")
    .optional()
    .trim()
    .escape(),

  body("date"),
];

module.exports = workoutValidator;
