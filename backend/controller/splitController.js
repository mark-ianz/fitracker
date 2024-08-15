const { matchedData, validationResult } = require("express-validator");
const Program = require("../models/programModel");
const { isValidObjectId } = require("mongoose");

const new_split = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array()[0].msg });
  }

  try {
    const result = matchedData(req);
    const program = new Program(result);
    const test = await program.save();

    return res.status(202).json({ test });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  }
};

const get_all_splits = async (req, res) => {
  try {
    const programs = await Program.find();
    return res.status(200).json({ programs });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  }
};

const get_one_split = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "Program not found" });
  }
  try {
    const program = await Program.findById(id);
    if (!program) {
      return res.status(400).json({ error: "Program not found" });
    }
    return res.status(200).json({ program });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  }
};


module.exports = {
  new_split,
  get_all_splits,
  get_one_split,
};
