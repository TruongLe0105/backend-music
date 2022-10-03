const moongose = require("mongoose");
const Schema = moongose.Schema;

const hundredTopSchema = Schema({
    header: { type: String, require: true, default: '', },
    title_rank: { type: String, require: true, default: '', },
    image: { type: String, require: true, default: '', },
    singer: { type: String, require: true, default: '', },
},
    { timestamps: true }
);

const HundredTop = moongose.model("HundredTop", hundredTopSchema);

module.exports = HundredTop;