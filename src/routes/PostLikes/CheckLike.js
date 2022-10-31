const router = require("express").Router();
const { CheckLike } = require("../../controllers/PostLikes/CheckLike");

// uploads post
router.post("/check_like", CheckLike);

module.exports = router;
