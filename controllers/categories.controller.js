const { catchAsync, sendResponse, AppError } = require('../helpers/utils');
const Categories = require('../models/Categories');

const categoriesController = {};

//Get list
categoriesController.getCategory = catchAsync(async (req, res, next) => {
    const { category } = req.params;
    // const key_work = category.toLowerCase();

    // console.log("key_work", key_work);

    const count = await Categories.countDocuments();

    const categories = await Categories.find({ category })
        .sort()

    console.log("categories", categories);

    return sendResponse(res, 200, true, { categories }, null, "Get categories successful");
})

//Post categories by addmin
categoriesController.addCategory = catchAsync(async (req, res, next) => {
    let { category, title, singer, image, banner_first, banner_second, banner_third } = req.body;
    category = category.toLowerCase();
    // title = title.toLowerCase();
    // console.log("here", category);

    const existed = await Categories.findOne({ title });

    if (existed) {
        throw new AppError(500, "Existed", "Item existed!")
    };

    const newCategory = await Categories.create({
        category, title, singer, image, banner_first, banner_second, banner_third
    });

    // console.log("newCategory", newCategory);

    return sendResponse(res, 200, true, {}, null, "Add category successful!");
});

categoriesController.deleteCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const target = await Categories.findOneAndDelete({ _id: id });
    const categories = await Categories.find();

    if (!target) {
        throw new AppError(404, "Category not found!", "Delete Error")
    };

    return sendResponse(res, 200, true, { categories }, null, "Delete category successful");
});

categoriesController.updateCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    const target = await Categories.findOne({ _id: id });
    if (!target) {
        throw new AppError(404, "Category not found", "Update error");
    };

    const allowUpdate = ["category", "title", "singer", "image", "banner_first", "banner_second", "banner_third"];

    console.log("target", target);

    allowUpdate.forEach(field => {
        if (body[field]) {
            target[field] = body[field];
        }
    });

    await target.save();

    return sendResponse(res, 200, true, { target }, null, "Update category successful!");
})

module.exports = categoriesController;