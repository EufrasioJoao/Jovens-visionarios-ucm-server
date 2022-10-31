const router = require("express").Router();
const add_like_route = require("./AddLike");
const check_like_route = require("./CheckLike");

// like routes
router.use(add_like_route);
router.use(check_like_route);

module.exports = router;
