const { catchAsync, sendResponse, AppError } = require('../helpers/utils');
const NewMusic = require('../models/NewMusic');
const Product = require('../models/Product');

const newMusicController = {};

//Get list
newMusicController.getRecentlyMusicUpdated = catchAsync(async (req, res, next) => {
    const { genres } = req.params;
    const count = await NewMusic.countDocuments();

    const list = await Product.find();

    const newList = list.filter(e => e.orther.includes(genres));

    return sendResponse(res, 200, true, { newList }, null, "Get NewMusic successful");
})

//Post NewMusic by addmin
// newMusicController.addCategory = catchAsync(async (req, res, next) => {
//     let { category, title, singer, image, banner_first, banner_second, banner_third } = req.body;
//     category = category.toLowerCase();

//     const existed = await NewMusic.findOne({ title });

//     if (existed) {
//         throw new AppError(500, "Existed", "Item existed!")
//     };

//     const newCategory = await NewMusic.create({
//         category, title, singer, image, banner_first, banner_second, banner_third
//     });

//     return sendResponse(res, 200, true, {}, null, "Add category successful!");
// });

// newMusicController.deleteCategory = catchAsync(async (req, res, next) => {
//     const { id } = req.params;

//     const target = await NewMusic.findOneAndDelete({ _id: id });
//     const NewMusic = await NewMusic.find();

//     if (!target) {
//         throw new AppError(404, "Category not found!", "Delete Error")
//     };

//     return sendResponse(res, 200, true, { NewMusic }, null, "Delete category successful");
// });

// newMusicController.updateCategory = catchAsync(async (req, res, next) => {
//     const { id } = req.params;
//     const body = req.body;

//     const target = await NewMusic.findOne({ _id: id });
//     if (!target) {
//         throw new AppError(404, "Category not found", "Update error");
//     };

//     const allowUpdate = ["category", "title", "singer", "image", "banner_first", "banner_second", "banner_third"];

//     allowUpdate.forEach(field => {
//         if (body[field]) {
//             target[field] = body[field];
//         }
//     });

//     await target.save();

//     return sendResponse(res, 200, true, { target }, null, "Update category successful!");
// })

module.exports = newMusicController;