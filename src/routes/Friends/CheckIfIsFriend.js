const router = require("express").Router();
const { CheckIfIsFriend } = require("../../controllers/Friends/CheckIfIsFriend");

router.post("/check_if_is_my_friend", CheckIfIsFriend);

module.exports = router;
