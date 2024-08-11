const express = require ("express");
const router = express.Router ();
const {
  get_all_users,
  get_one_user,
  create_user,
  login_user
} = require ("../controller/userController");
const {newUserValidator, loginUserValidator} = require("../utils/userValidator");

router.post ("/signup", newUserValidator, create_user) // Post a new user 
router.post ("/login", loginUserValidator, login_user)  // Login a user

module.exports = router;