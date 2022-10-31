const router = require("express").Router();
const { GetAll } = require("../../controllers/Users/All");

// gets all users
router.get("/all", GetAll);

module.exports = router;
