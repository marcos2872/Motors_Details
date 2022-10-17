const express = require('express');
// const mongoose = require('./controller/connection');
require('dotenv').config();

const PORT = process.env.PORT_BACK || 9002;

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'API de motores de veículos elétricos',
  });
});

// mongoose;

app.listen(PORT, () => console.log(`
  ***************************
  Server running on port ${PORT}
  CTRL+C to stop server......
  ***************************
`));
