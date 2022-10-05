const { catchAsync, sendResponse, AppError } = require('../helpers/utils');
const NewMusic = require('../models/NewMusic');
const Product = require('../models/Product');

const newMusicController = {};

//Get list
newMusicController.getRecentlyMusicUpdated = catchAsync(async (req, res, next) => {
    const count = await NewMusic.countDocuments();
    const newList = await NewMusic.find().sort()

    return sendResponse(res, 200, true, { newList }, null, "Get NewMusic successful");
})

//Post NewMusic by addmin
newMusicController.addNewMusic = catchAsync(async (req, res, next) => {
    let { genres, image, singer } = req.body;

    console.log({ genres })

    const existed = await NewMusic.findOne({ genres });

    if (existed) {
        throw new AppError(500, "Existed", "Item existed!")
    };

    const newMusic = await NewMusic.create({
        genres, singer, image,
    });

    return sendResponse(res, 200, true, {}, null, "Add category successful!");
});

newMusicController.deleteNewMusic = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const target = await NewMusic.findOneAndDelete({ _id: id });

    if (!target) {
        throw new AppError(404, "Type of music not found!", "Delete Error")
    };

    return sendResponse(res, 200, true, {}, null, "Delete item successful");
});

newMusicController.updateNewMusic = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    const target = await NewMusic.findOne({ _id: id });
    if (!target) {
        throw new AppError(404, "Category not found", "Update error");
    };

    const allowUpdate = ["genres", "singer", "image"];

    allowUpdate.forEach(field => {
        if (body[field]) {
            target[field] = body[field];
        }
    });

    await target.save();

    return sendResponse(res, 200, true, { target }, null, "Update category successful!");
})

module.exports = newMusicController;