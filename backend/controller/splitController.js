const { matchedData, validationResult } = require("express-validator");
const Program = require("../models/programModel");
const Split = require("../models/splitModel");
const { isValidObjectId } = require("mongoose");
const splitModel = require("../models/splitModel");

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

  return res.status(202).json(split);

  /* try {
    const result = matchedData(req);
    const program = new Program(result);
    const test = await program.save();

    return res.status(202).json({ test });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  } */
};

const get_all_splits = async (req, res) => {
  try {
    const programs = await Split.find();
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
    return res.status(400).json({ error: "Split not found" });
  }
  try {
    const program = await Split.findById(id);
    if (!program) {
      return res.status(400).json({ error: "Split not found" });
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
