const router = require("express").Router();
const get_my_messages_route = require("./GetMessages");

//  message routes
router.use(get_my_messages_route);

module.exports = router;
