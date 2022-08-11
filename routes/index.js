var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const producRouter = require("./product.api");
router.use("/products", producRouter);

module.exports = router;
