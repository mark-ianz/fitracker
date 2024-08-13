const { matchedData, validationResult } = require("express-validator");

const new_program = (req, res) => {
  const error = validationResult(req);

  if (error) {
    return res.status(422).json({ error: error.array()[0].msg });
  }

  const program = matchedData(req);
};

module.exports = {
  new_program,
};
