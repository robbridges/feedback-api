import express =require('express');
const feedbackRouter = require('./routes/feedback');
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(feedbackRouter);





app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})