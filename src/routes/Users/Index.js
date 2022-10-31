const router = require("express").Router();
const register_route = require("./Register");
const login_route = require("./Login");
const single_user_route = require("./Single");
const getall_user_route = require("./All");
const update_avatar_route = require("./UpdateAvatar");
const update_userinfo_route = require("./UpdateInfo");

//  user routes
router.use(register_route);
router.use(login_route);
router.use(single_user_route);
router.use(getall_user_route);
router.use(update_avatar_route);
router.use(update_userinfo_route);

module.exports = router;
