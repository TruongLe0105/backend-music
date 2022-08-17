const { catchAsync, sendResponse, AppError } = require('../helpers/utils');
const Categories = require('../models/Categories');

const categoriesController = {};

//Get list
categoriesController.getListCategories = catchAsync(async (req, res, next) => {
    const count = await Categories.countDocuments();

    const categories = await Categories.find()
        .sort()

    return sendResponse(res, 200, true, { categories }, null, "Get categories successful")
})

//Post categories by addmin
categoriesController.addCategoriesByAdmin = catchAsync(async (req, res, next) => {
    const { title, image } = req.body;
    const categories = await Categories.findOne({ title });

    if (categories) {
        throw new AppError(500, "Existed", "Add category error!")
    }

    const newCategory = await Categories.create({
        title, image
    })
    return sendResponse(res, 200, true, { newCategory }, null, "Add categories successful!")
})

module.exports = categoriesController;