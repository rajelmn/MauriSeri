const express = require('express');
const fs = require('node:fs');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.text())

app.get('/', (req, res) => {
  res.send('in get router')
})



let i = 1;

app.post('/', (req, res) => {
  res.send('this is great');
  console.log(req.body)

  const message = fs.readFileSync('server/user_information.json','utf-8', (err, data) => {
    if(err) throw new Error(err);
    return data;
  });

  console.log(message);
  const jsonData = JSON.parse(message)
  jsonData[`message${++i}`]= req.body;

  fs.writeFile('server/user_information.json', JSON.stringify(jsonData, null, 4), (err, data) => {
    if(err) console.error(err)
  })
  console.log(jsonData)
})

app.get('/contact', (req, res) => {
  const allmessages = fs.readFileSync('server/user_information.json', 'utf-8', (err, data) => {
    if(err) throw new Error(err)
  });
  res.send(allmessages)
})

app.listen(port, () => {
  console.log('app is running in port' + "" + port);
})

