const Motor = require('../models/Motor');

const allmotors = async (_req, res) => {
  const response = await Motor.find();

  res.status(200).json(response);
};

module.exports = allmotors;