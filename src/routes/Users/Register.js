const router = require("express").Router();
const { addUser } = require("../../controllers/Users/Register");

// handle user registation
router.post("/register", addUser);

module.exports = router;
