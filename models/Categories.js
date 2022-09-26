const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = Schema({
    category: { type: String, require: true, default: '' },
    title: { type: String, require: true, default: '' },
    singer: { type: String, require: true, default: '' },
    image: { type: String, require: true, default: '' },
    banner_first: { type: String, require: false, default: '' },
    banner_second: { type: String, require: false, default: '' },
    banner_third: { type: String, require: false, default: '' },
},
    { timestamps: true }
);

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;