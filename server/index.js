require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();

app.use(logger);

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('EXPRESS LISTENING ON: ', process.env.PORT);
});
