const router = require("express").Router();
const { AddLike } = require("../../controllers/PostLikes/AddLike");

// uploads post
router.post("/add_like", AddLike);

module.exports = router;
