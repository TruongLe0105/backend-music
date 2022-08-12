require("dotenv").config();
const cors = require("cors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_DEV_URI;
const app = express();

const { sendReponse, sendResponse } = require("./helpers/utils");
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

// catch 404 and forard to error handler
app.use((req, res, next) => {
    const err = new Error("404 - Resource not found");
    next(err);
});

/* Initialize Error Handling */
app.use((err, req, res, next) => {
    console.log("ERROR", err);
    const statusCode = err.message.split(" - ")[0];
    const message = err.message.split(" - ")[1];
    if (!isNaN(statusCode)) {
        sendResponse(res, statusCode, false, null, { message }, null);
    } else {
        sendResponse(
            res,
            500,
            false,
            null,
            { message: err.message },
            "Internal Server Error"
        );
    }
})


module.exports = app;
