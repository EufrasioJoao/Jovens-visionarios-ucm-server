const router = require("express").Router();
const upload_route = require("./Upload");
const get_posts_route = require("./GetAll");
const get_posts_byID_route = require("./GetAllById");

// post routes
router.use(upload_route);
router.use(get_posts_route);
router.use(get_posts_byID_route);

module.exports = router;
