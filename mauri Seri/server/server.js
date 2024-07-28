const express = require('express');
const fs = require('node:fs');
const cors = require('CORS')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.text())

app.post('/', (req, res) => {
  
 fs.appendFile('server/user_information.txt', `${req.body}, `, err => {
  if(err) throw new Error
 })
})

app.listen(port, () => {
  console.log('app is running in port' + "" + port);
})
