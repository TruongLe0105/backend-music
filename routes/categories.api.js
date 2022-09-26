const express = require("express");
const router = express.Router();

const {
    getCategory,
    addCategory,
    deleteCategory,
    updateCategory
} = require("../controllers/categories.controller")

//User
router.get("/:category", getCategory);

//Admin
router.post("/add", addCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;

