const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const splitValidator = require("../utils/splitValidator");
const {
  new_split,
  get_all_splits,
  get_one_split,
} = require("../controller/splitController");

router.use(requireAuth);

router.get("/", get_all_splits);
router.get("/:id", get_one_split);
router.post("/", splitValidator, new_split);

module.exports = router;
