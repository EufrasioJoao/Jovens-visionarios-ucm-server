const router = require("express").Router();
const { GetFriendshipRequest } = require("../../controllers/Friends/GetFriendshipRequest");

router.post("/my_requests", GetFriendshipRequest);

module.exports = router;
