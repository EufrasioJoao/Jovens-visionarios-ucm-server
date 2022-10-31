const router = require("express").Router();
const users_router = require("./Users/Index");
const posts_router = require("./Posts/Index");
const likes_router = require("./PostLikes/Index");
const comments_router = require("./PostComments/Index");
const friends_related_router = require("./Friends/Index");
const messages_related_router = require("./Messages/Index");

// users route
router.use("/users", users_router);
router.use("/posts", posts_router);
router.use("/likes", likes_router);
router.use("/comments", comments_router);
router.use("/friends", friends_related_router);
router.use("/messages", messages_related_router);

module.exports = router;
