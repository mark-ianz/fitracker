const { body } = require("express-validator");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const newUserValidator = [
  body("username")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long")
    .isString()
    .withMessage("Username must be a string")
    .custom(async (username) => {
      // Check if username exist
      if (await User.findOne({ username }))
        throw new Error("Username already exist");
      return true;
    }),
  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email address")
    .custom(async (email) => {
      // Custom email validator to see if email exist
      if (await User.findOne({ email })) throw new Error("Email already exist");
      return true;
    }),
  body("password")
    .trim()
    .escape()
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one number and one special character"
    ),

  body("confirmPassword")
    .trim()
    .escape()
    .custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Password does not match");
      return true;
    }),

  body("image")
    .trim()
    .optional()
    .default("https://cdn-icons-png.flaticon.com/512/149/149071.png"),
];

const loginUserValidator = [
  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isString()
    .withMessage("Email must be a string")
    .isEmail()
    .withMessage("Invalid email address")
    .custom(async (email) => {
      const user = await User.findOne({email});
      if (!user) throw new Error("Email does not exist");
      return true;
    }),

  body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isString()
    .withMessage("Password must be a string")
    .custom(async (password, { req }) => {
      const user = await User.findOne({email: req.body.email});
      if (!(await bcrypt.compare(password, user.password)))
        throw new Error("Incorrect password");
      return true;
    }),
];

module.exports = {
  newUserValidator,
  loginUserValidator,
};
