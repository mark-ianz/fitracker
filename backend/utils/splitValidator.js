const { body } = require("express-validator");

const splitValidator = [
  body("user").isEmpty(),

  body("title").notEmpty().withMessage("Split title cannot be empty").trim(),

  body("description")
    .trim()
    .default("No split description provided"),

  body("programs")
    .notEmpty()
    .withMessage("Programs list is required")
    .isArray()
    .withMessage("Programs list should be an array")
    .custom((programs) => {
      if (programs.length <= 0) {
        throw new Error("Programs list cannot be empty");
      }

      return true;
    }),

  body("programs.*._id")
    .optional()
    .isMongoId()
    .withMessage("Program ID is not a valid Mongo ID"),
];

module.exports = splitValidator;
