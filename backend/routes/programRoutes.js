const express = require("express");
const router = express.Router();
const {
  get_one_program,
  post_program,
} = require("../controller/programController");
const programValidator = require ("../utils/programValidator")

router.get("/:id", get_one_program);
router.post("/",programValidator, post_program);
