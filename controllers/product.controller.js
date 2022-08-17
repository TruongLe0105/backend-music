const { catchAsync, sendResponse, AppError } = require('../helpers/utils');
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
    const { singer, song, categories, time, image, audio } = req.body;
    const products = await Product.find();
    const inValidProduct = products?.find(product =>
        product.singer.toString().toLowerCase() === singer.toString().toLowerCase() &&
        product.song.toString().toLowerCase() === song.toString().toLowerCase());
    if (inValidProduct) {
        throw new AppError(500, "Product existed", "add product error");
    };

    const product = await Product.create({
        singer, song, categories, time, image, audio
    })
    return sendResponse(res, 200, true, { product }, null, "Add product successful!")
});

//Update audio by addmin
productController.updateAudio = catchAsync(async (req, res, next) => {
    const { id, audio } = req.body;
    console.log("body", req.body)
    const product = await Product.findById(id);

    console.log("product", product);
    product.audio = audio;
    console.log("newProduct:", product);

    await product.save();
    return sendResponse(res, 200, true, { product }, null, "Update audio successful!")
})

module.exports = productController;