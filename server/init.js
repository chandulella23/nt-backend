const express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors');
var app = express();
app.use(bodyparser());
app.use(cors());
module.exports = app;
require('dotenv').config({ silent: true });
require('./../config/routes')(app)
require('./../config/db')