const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use('/', routes);

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}!`),
);