const express = require("express");
const router = express.Router();
const {
  get_one_program,
  post_program,
} = require("../controller/programController");
const programValidator = require ("../utils/programValidator");
const requireAuth = require("../middlewares/requireAuth");


router.get("/:id", get_one_program);

// Posting a program needs an authentication, viewing doesn't
router.use (requireAuth);

router.post("/", programValidator, post_program);

module.exports = router;