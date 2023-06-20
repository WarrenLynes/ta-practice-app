require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const db = require('./db/index');
const routes = require('./routes');
const { cookieParser, sessionHandler } = require('./middleware/auth');
const app = express();

app.use(logger);
app.use(express.json());
app.use(cookieParser, sessionHandler);
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', routes(db));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('EXPRESS LISTENING ON: ', process.env.PORT);
});
