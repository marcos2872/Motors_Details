const Router = require('express');
const allmotors = require('../controller/getMotor');
const inserMotor = require('../controller/postMotor');

const route = Router();

route.post('/insertmotor', inserMotor);

route.get('/motors', allmotors);

module.exports = route;