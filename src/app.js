const express = require('express');
const app = express();
const port = process.env.DEFAULT_PORT || 8080;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello, World\n');
  res.end();
});

app.listen(port, () => {
  console.log(`Server started running at http://localhost:${process.env.DEFAULT_PORT || 8080}`);
});
