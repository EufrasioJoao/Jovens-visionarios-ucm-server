const router = require("express").Router();
const { GetMyFriends } = require("../../controllers/Friends/GetMyFriends");

router.post("/get_my_friends", GetMyFriends);

module.exports = router;
