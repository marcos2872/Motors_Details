import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = process.env.PORT_BACK || 9002;

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