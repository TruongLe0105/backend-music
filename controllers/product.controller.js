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
    const { singer, song, category, time, image, audio } = req.body;
    const products = await Product.find();
    const inValidProduct = products?.find(product =>
        product.singer.toString().toLowerCase() === singer.toString().toLowerCase() &&
        product.song.toString().toLowerCase() === song.toString().toLowerCase());
    if (inValidProduct) {
        throw new AppError(500, "Product existed", "add product error");
    };

    const product = await Product.create({
        singer, song, category, time, image, audio
    })
    return sendResponse(res, 200, true, { product }, null, "Add product successful!")
});

//Update audio by addmin
productController.updateAudio = catchAsync(async (req, res, next) => {
    const { id, audio } = req.body;
    const product = await Product.findById(id);

    product.audio = audio;

    await product.save();
    return sendResponse(res, 200, true, { product }, null, "Update audio successful!")
})

//Update Product
productController.updateProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;

    const target = await Product.findById(id);

    if (!target) {
        throw new AppError(404, "Product not found!", "Updata product error")
    };

    const allowUpdate = ["category", "singer", "song", "time", "image", "audio"];

    allowUpdate.forEach((field => {
        if (body[field]) target[field] = body[field];
    }))

    await target.save();

    return sendResponse(res, 200, true, { target }, null, "Update product success!")
});

productController.deleteProduct = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const target = await Product.findByIdAndDelete(id);
    if (!target) {
        throw new AppError(404, "Product not found", "Delete product error!")
    };
    return sendResponse(res, 200, true, {}, null, "Delete Product successful!")
})

module.exports = productController;