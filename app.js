require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectMongo = require('./config/db');
const { connect } = require('mongoose');
const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.json());

connectMongo();

app.use('/', routes);

module.exports = app;