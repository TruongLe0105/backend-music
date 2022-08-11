require("dotenv").config();
const cors = require("cors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_DEV_URI;
const app = express();

const { sendReponse } = require("./helpers/utils");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

/* DB connection */
mongoose
    .connect(mongoURI)
    .then(() => {
        console.log(`DB connected`);
    })
    .catch((err) => console.log(err))


app.use('/api', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
