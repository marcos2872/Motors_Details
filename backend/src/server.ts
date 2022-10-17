const express = require('express')
const PORT = 8080


const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'API de motores de veículos elétricos',
  })
})


app.listen(PORT, () => console.log(`
  ***************************
  Server running on port ${PORT}
  CTRL+C to stop server......
  ***************************
`))