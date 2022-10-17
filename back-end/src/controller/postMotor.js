const Motor = require('../models/Motor');

const inserMotor = async (req, res) => {
  const obj = req.body;
  const response = await Motor.create(obj);

  res.status(200).json(response);
};

module.exports = inserMotor;