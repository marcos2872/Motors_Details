const Router = require('express');
const inserMotor = require('../controller/postMotor');

const route = Router();

route.post('/insertmotor', inserMotor);

route.get('/motors', (_req, res) => {
  res.status().json();  
});

module.exports = route;