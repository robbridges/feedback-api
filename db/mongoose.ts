const mongoose = require('mongoose');
const dataBaseUrl: string = process.env.MONGODB_URL as string

mongoose.connect(dataBaseUrl, {});

