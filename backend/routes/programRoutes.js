const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const programValidator = require("../utils/programValidator");
const {
  new_program,
  get_all_programs,
  get_one_program,
} = require("../controller/programController");

router.use(requireAuth);

router.get("/", get_all_programs);
router.post("/new", programValidator, new_program);
router.get("/:id", get_one_program);

module.exports = router;
