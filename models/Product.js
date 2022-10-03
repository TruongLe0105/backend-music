const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
    singer: { type: String, require: true, default: '' },
    song: { type: String, require: true, default: '' },
    category: { type: String, require: true, default: '' },
    time: { type: String, require: true, default: '' },
    image: { type: String, require: true, default: '' },
    audio: { type: String, require: false, default: '' },
    new_release: { type: Boolean, require: false, default: false },
    orther: [],
},
    { timestamps: true }
);

const Product = mongoose.model("Products", productSchema)

module.exports = Product;