const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { matchedData, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

const createToken = ({ _id, email, username }) => {
  return jwt.sign(
    {
      _id,
      email,
      username,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "3d",
    }
  );
};

const create_user = async (req, res) => {
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Errors:", errors);
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  try {
    // Get the data
    const data = matchedData(req);

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Save the user to the database
    const user = new User({ ...data, password: hashedPassword });
    user.save();
    // Create token
    const token = createToken(user);

    return res.status(202).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token,
      isAuth: true,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error." });
  }
};

const login_user = async (req, res) => {
  // Check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Errors:", errors);
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  try {
    const { email } = matchedData(req);
    const user = await User.findOne({ email });

    // Create token
    const token = createToken(user);

    res.status(202).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token,
      isAuth: true,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  create_user,
  login_user,
};
