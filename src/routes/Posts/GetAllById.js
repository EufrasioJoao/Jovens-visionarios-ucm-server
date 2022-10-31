const router = require("express").Router();
const { getAllPostsById } = require("../../controllers/Posts/GetAllById");

// gets all posts
router.get("/:id", getAllPostsById);

module.exports = router;
