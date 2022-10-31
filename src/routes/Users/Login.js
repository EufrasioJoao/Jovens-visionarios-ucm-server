const router = require("express").Router();
const { LoginUser } = require("../../controllers/Users/Login");

// handle user registation
router.post("/login", LoginUser);

module.exports = router;
