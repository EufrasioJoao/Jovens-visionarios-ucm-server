const router = require("express").Router();
const add_comment_route = require("./AddComment");
const get_comments_route = require("./FindComments");

// comment routes
router.use(add_comment_route);
router.use(get_comments_route);

module.exports = router;
