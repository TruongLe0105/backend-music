const express = require("express");
const router = express.Router();

const { getListProductRender, addProductsByAdmin, updateAudio } = require("../controllers/product.controller")

//User
router.get("/", getListProductRender);

//Admin
router.post("/add", addProductsByAdmin);

router.put("/update-audio", updateAudio);

module.exports = router;

