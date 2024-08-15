const { ObjectId } = require("mongodb");
const Program = require("../models/programModel");

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

const post_program = async (req,res)=> {

}

module.exports = {
  get_one_program,
  post_program
}
