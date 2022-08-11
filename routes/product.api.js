const express = require("express");
const router = express.Router();

const { getListProductRender, addProductsByAdmin } = require("../controllers/product.controller")

//User
router.get("/", getListProductRender);

//Admin
router.post("/add", addProductsByAdmin)

module.exports = router;

