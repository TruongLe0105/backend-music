const express = require("express");
const router = express.Router();

const { getRecentlyMusicUpdated } = require("../controllers/newMusic.controller")

//User
router.get("/:genres", getRecentlyMusicUpdated);

//Admin
// router.post("/add", addCategory);

// router.put("/:id", updateCategory);

// router.delete("/:id", deleteCategory);

module.exports = router;

