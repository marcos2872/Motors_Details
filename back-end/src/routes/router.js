const Router = require('express');
const multer = require('multer');
const allmotors = require('../controller/getMotor');
const inserMotor = require('../controller/postMotor');
const multerConfig = require('../config/multer');

const route = Router();

route.post('/insertmotor', multer(multerConfig).array('file'), inserMotor);

route.get('/motors', allmotors);

module.exports = route;