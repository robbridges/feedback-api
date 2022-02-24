const express =require('express');
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})