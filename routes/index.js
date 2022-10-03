var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'cec' });
});

const producRouter = require("./product.api");
const categoriesRouter = require("./categories.api");
const hundredTopRouter = require("./hundredTop.api");
const newMusicRouter = require("./newMusic.api");
router.use("/products", producRouter);

router.use("/categories", categoriesRouter);

router.use("/hundred-top", hundredTopRouter);

router.use("/new-music", newMusicRouter);

module.exports = router;
