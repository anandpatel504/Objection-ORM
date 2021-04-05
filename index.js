const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

var usersRouter = require('./routes/users');
app.use(usersRouter);

const PORT = process.env.PORT || 2021

// The PORT listener
app.listen(PORT, function(){
    console.log(`Server is running on ${PORT} PORT`);
});