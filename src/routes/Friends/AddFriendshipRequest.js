const router = require("express").Router();
const { AddFrienshipRequest } = require("../../controllers/Friends/AddFriendshipRequest");

router.post("/add_friendship_request", AddFrienshipRequest);

module.exports = router;
