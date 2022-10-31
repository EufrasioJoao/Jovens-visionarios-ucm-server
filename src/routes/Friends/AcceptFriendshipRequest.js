const router = require("express").Router();
const { AcceptFriendshipRequest } = require("../../controllers/Friends/AcceptFriendshipRequest");

router.post("/accept_friendship_request", AcceptFriendshipRequest);
AcceptFriendshipRequest

module.exports = router;
