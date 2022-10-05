const express = require("express");
const router = express.Router();

const { getRecentlyMusicUpdated, deleteNewMusic, addNewMusic, updateNewMusic } = require("../controllers/newMusic.controller")

//User
router.get("/", getRecentlyMusicUpdated);

//Admin
router.post("/add", addNewMusic);

router.put("/:id", updateNewMusic);

router.delete("/:id", deleteNewMusic);

module.exports = router;

