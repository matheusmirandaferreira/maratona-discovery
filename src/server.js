const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();

app
  .use(express.json())
  .use(urlencoded({ extended: false }))
  .use(express.static('public'))
  .get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(3000, () => console.log('executando na porta 3000'));
  