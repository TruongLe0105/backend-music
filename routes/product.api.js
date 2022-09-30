const express = require("express");
const router = express.Router();

const { getListProductRender, addProductsByAdmin, updateAudio, updateProduct, deleteProduct } = require("../controllers/product.controller")

//User
router.get("/", getListProductRender);

//Admin
router.post("/add", addProductsByAdmin);

router.put("/update-audio", updateAudio);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;

