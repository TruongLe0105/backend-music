const express = require("express");
const router = express.Router();

const { getListCategories, addCategoriesByAdmin } = require("../controllers/categories.controller")

//User
router.get("/", getListCategories);

//Admin
router.post("/add", addCategoriesByAdmin)

module.exports = router;

