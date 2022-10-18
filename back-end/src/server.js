const express = require('express');
const morgan = require('morgan');
const route = require('./routes/router');
require('dotenv').config();

const PORT = process.env.PORT || 9002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(route);

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'API de motores de veículos elétricos',
  });
});

app.listen(PORT, () => console.log(`
  ***************************
  Server running on port ${PORT}
  CTRL+C to stop server......
  ***************************
`));
