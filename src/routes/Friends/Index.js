const router = require("express").Router();

const add_friendship_request_route = require("./AddFriendshipRequest");
const Check_Frienship_Request_route = require("./CheckFriendshipRequest");
const Delete_Frienship_Request_route = require("./DeleteFriendshipRequest");
const Get_Frienship_Request_route = require("./GetFriendshipRequest");
const Accept_Frienship_Request_route = require("./AcceptFriendshipRequest");
const Check_If_Is_Friend_route = require("./CheckIfIsFriend");
const Get_My_Friends_route = require("./GetMyFriends");

router.use(add_friendship_request_route);
router.use(Check_Frienship_Request_route);
router.use(Delete_Frienship_Request_route);
router.use(Get_Frienship_Request_route);
router.use(Accept_Frienship_Request_route);
router.use(Check_If_Is_Friend_route);
router.use(Get_My_Friends_route);

module.exports = router;
