const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const bubble = require('./routes/bubbleroute.js');

app.use(bodyParser.urlencoded({ extended: true}));

app.use('/bubblesort', bubble);

module.exports = app;
