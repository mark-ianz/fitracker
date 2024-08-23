const { matchedData, validationResult } = require("express-validator");
const Split = require("../models/splitModel");
const { isValidObjectId } = require("mongoose");

const new_split = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array()[0].msg });
  }

  const data = matchedData(req);

  const user = req.user._id;

  // Map the programs and insert the user ID on each program
  const programsWithUserId = data.programs.map((program) => ({
    ...program,
    user,
  }));

  // Array of ID of the programs that are in the split
  const ids = await Split.saveProgramsAndGetIds(programsWithUserId);

  // Spread the data and replace the program of exercises with the programs ids.
  const split = new Split({ ...data, programs: [...ids] });
  await split.save();

  return res.status(202).json({ split });
};

const get_user_splits = async (req, res) => {
  const user = req.user._id;
  try {
    const split = await Split.find({ user });
    return res.status(200).json({ split });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  }
};

const get_all_splits = async (req, res) => {
  try {
    const splits = await Split.find();
    return res.status(200).json({ splits });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  }
};

const get_one_split = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "Split not found" });
  }
  try {
    const split = await Split.findById(id);
    if (!split) {
      return res.status(400).json({ error: "Split not found" });
    }
    return res.status(200).json({ split });
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
  get_user_splits,
};
