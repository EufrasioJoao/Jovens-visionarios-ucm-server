const router = require("express").Router();
const { GetMessages } = require("../../controllers/Messages/GetMessages");

// gets single user
router.post("/my_messages", GetMessages);

module.exports = router;
