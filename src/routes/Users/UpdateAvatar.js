const router = require("express").Router();
const { UpdateAvatar } = require("../../controllers/Users/UpdateAvatar");


router.post("/update_avatar", UpdateAvatar);

module.exports = router;
