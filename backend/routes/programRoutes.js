const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const programValidator = require("../utils/programValidator");
const {
  new_program,
  get_all_programs,
} = require("../controller/programController");

router.use(requireAuth);

router.get("/", get_all_programs);
router.post("/new", programValidator, new_program);

module.exports = router;
