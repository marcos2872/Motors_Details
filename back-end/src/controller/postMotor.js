const Motor = require('../models/Motor');

const inserMotor = async (req, res) => {
  const { body } = req.body;
  const imgs = req.files;
  // const response = await Motor.create(obj);
  console.log(body);
  console.log(imgs);

  res.status(200).json(imgs);
};

module.exports = inserMotor;