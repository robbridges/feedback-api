"use strict";
var express = require('express');
require('./db/mongoose');
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("app listening on " + PORT);
});
