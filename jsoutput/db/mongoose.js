"use strict";
var mongoose = require('mongoose');
var feedback = require('../models/feedback');
var dataBaseUrl = process.env.MONGODB_URL;
mongoose.connect(dataBaseUrl, {});
