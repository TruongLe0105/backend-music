const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newMusicSchema = Schema({
    genres: { type: String, require: true, default: '' },
    image: { type: String, require: true, default: '' },
    singer: { type: String, require: true, default: '' },
},
    { timestamps: true },
);

const NewMusic = mongoose.model('NewMusic', newMusicSchema);

module.exports = NewMusic;