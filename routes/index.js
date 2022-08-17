var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'cec' });
});

const producRouter = require("./product.api");
const categoriesRouter = require("./categories.api");
router.use("/products", producRouter);

router.use("/categories", categoriesRouter)

module.exports = router;
