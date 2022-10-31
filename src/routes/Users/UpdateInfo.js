const router = require("express").Router();
const { UpdateUser } = require("../../controllers/Users/UpdateInfo");


router.post("/update_info", UpdateUser);

module.exports = router;
