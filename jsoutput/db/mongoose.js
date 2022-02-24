"use strict";
var mongoose = require('mongoose');
var dataBaseUrl = process.env.MONGODB_URL;
mongoose.connect(dataBaseUrl, {});
