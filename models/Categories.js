const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = Schema({
    title: { type: String, require: true, default: '' },
    image: { type: String, require: true, default: '' },
},
    { timestamps: true }
);

const Categories = mongoose.model("Categories", CategoriesSchema)

module.exports = Categories;