const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGO_DB;

mongoose.connect(URL)
.then(() => console.log(`
  Server connected to Mongo DB
`))
.catch(console);

module.exports = mongoose;