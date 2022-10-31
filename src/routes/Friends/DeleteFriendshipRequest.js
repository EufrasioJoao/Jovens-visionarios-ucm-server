const router = require("express").Router();
const { DeleteFrienshipRequest } = require("../../controllers/Friends/DeleteFriendshipRequest");

router.post("/delete_friendship_request", DeleteFrienshipRequest);

module.exports = router;
