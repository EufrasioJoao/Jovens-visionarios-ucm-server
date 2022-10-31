const router = require("express").Router();
const { getAllPosts } = require("../../controllers/Posts/GetAll");

// gets all posts
router.get("/get", getAllPosts);

module.exports = router;
