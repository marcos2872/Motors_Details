const Motor = require('../models/Motor');

const inserMotor = async (req, res) => {
  const { body } = req.body;
  const imgs = req.files;

  const arrayImages = imgs
  .reduce((acc, curr) => ([...acc, { key: curr.key, url: curr.location || '' }]), []);
  
  const result = { ...(JSON.parse(body)), images: arrayImages };

  const response = await Motor.create(result);
  res.status(200).json(response);
};

module.exports = inserMotor;
