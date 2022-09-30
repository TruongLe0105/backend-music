const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
    id: { type: Schema.Types.ObjectId, require: true },
    singer: { type: String, require: true, default: '' },
    song: { type: String, require: true, default: '' },
    category: { type: String, require: true, default: '' },
    time: { type: String, require: true, default: '' },
    image: { type: String, require: true, default: '' },
    audio: { type: String, require: false, default: '' },
},
    { timestamps: true }
);

const Product = mongoose.model("Products", productSchema)

module.exports = Product;