const router = require("express").Router();
const { CheckFrienshipRequest } = require("../../controllers/Friends/CheckFriendshipRequest");

router.post("/already_made_request", CheckFrienshipRequest);

module.exports = router;
