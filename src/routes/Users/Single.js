const router = require("express").Router();
const { GetUser } = require("../../controllers/Users/Single");

// gets single user
router.get("/single/:username", GetUser);

module.exports = router;
