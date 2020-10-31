const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

var usersRouter = require('./routes/users');
app.use(usersRouter);

const PORT = process.env.PORT || 2021

// The PORT listener
app.listen(PORT, function(){
    console.log(`Server is running on ${PORT} PORT`);
});