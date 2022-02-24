const mongoose = require('mongoose');
const feedback = require('../models/feedback');

const dataBaseUrl: string = process.env.MONGODB_URL as string

mongoose.connect(dataBaseUrl, {});

