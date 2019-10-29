require("dotenv").config();
const secrets = require('./config/secrets')
const express = require('express');
const app = express();
// var port = process.env.PORT || 3001;

/**
 * Validate that we have the proper environment variables
 */
secrets.validateEnvironment();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
  console.log(process.env.DB_HOST_LOCAL);
});