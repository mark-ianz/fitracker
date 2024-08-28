const { ObjectId } = require("mongodb");
const Program = require("../models/programModel");
const { validationResult, matchedData } = require("express-validator");

const get_one_program = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Program not found" });
  }

  try {
    const program = await Program.findById(id);
    if (!program) {
      return res.status(404).json({ error: "Program not found" });
    }
    return res.status(200).json({ program });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later" });
  }
};

const get_array_program = async (req, res) => {
  const ids = req.query.ids;
  if (!ids) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const programs = await Program.find({ _id: { $in: ids } });
  res.json({ programs });
};

const post_program = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({ error: error.array()[0].msg });
  }

  const data = matchedData(req);

  const program = await new Program(data).save();

  res.status(201).json(program);
};

module.exports = {
  get_one_program,
  post_program,
  get_array_program,
};
