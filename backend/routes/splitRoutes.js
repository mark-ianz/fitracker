const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const splitValidator = require("../utils/splitValidator");
const {
  new_split,
  get_all_splits,
  get_one_split,
  get_user_splits,
} = require("../controller/splitController");

router.get("/all", get_all_splits);
router.get("/one/:id", get_one_split);
router.use(requireAuth);
router.get("/user", get_user_splits);
router.post("/", splitValidator, new_split);

module.exports = router;
