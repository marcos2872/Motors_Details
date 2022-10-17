const newMotor = require('../models/postMotor');

const inserMotor = async (req, res) => {
  const obj = req.body;
  const response = await newMotor(obj);

  res.status(200).json(response);
};

module.exports = inserMotor;