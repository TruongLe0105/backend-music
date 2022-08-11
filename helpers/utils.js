const utilsHelper = {};
const crypto = require("crypto");
const { response } = require("express");

utilsHelper.sendResponse = (res, status, success, data, error, message) => {
    const response = {};
    if (success) response.success = success;
    if (data) response.data = data;
    if (error) response.error = error;
    if (message) response.message = message;
    return res.status(status).json(response);
}

utilsHelper.catchAsync = (func) => (req, res, next) => func(req, res, next).catch((err) => next(err));

class AppError extends Error {
    constructor(statusCode, message, errorType) {
        super(message);
        this.statusCode = statusCode;
        this.errorType = errorType;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

utilsHelper.AppError = AppError;
module.exports = utilsHelper;