const router = require("express").Router();
const { uploadPost } = require("../../controllers/Posts/Upload");

// uploads post
router.post("/upload", uploadPost);

module.exports = router;
