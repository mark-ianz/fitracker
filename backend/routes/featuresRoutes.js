const express = require("express");
const router = express.Router();
const Feature = require("../models/featureModel");

router.get("/", async (req, res) => {
  const x = await Feature.find();
  return res.json(x);
});

router.post ("/", async (req,res)=> {
  const feature = new Feature (req.body);
  const result = await feature.save ();
  return res.json (result)
})

module.exports = router;
