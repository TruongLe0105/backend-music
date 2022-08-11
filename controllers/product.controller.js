const { catchAsync, sendResponse } = require('../helpers/utils');
const Product = require('../models/Product');

const productController = {};

//Get list
productController.getListProductRender = catchAsync(async (req, res, next) => {
    const count = await Product.countDocuments();

    const products = await Product.find()
        .sort()

    return sendResponse(res, 200, true, { products }, null, "Get products successful")
})

//Post product by addmin
productController.addProductsByAdmin = catchAsync(async (req, res, next) => {
    const { id, singer, song, categories, time, image, audio } = req.body;

    const product = await Product.create({
        id, singer, song, categories, time, image, audio
    })
    return sendResponse(res, 200, true, { product }, null, "Add product successful!")
})

module.exports = productController;