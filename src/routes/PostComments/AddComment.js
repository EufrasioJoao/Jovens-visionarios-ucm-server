const router = require("express").Router();
const { AddComment } = require("../../controllers/PostComments/AddComment");

router.post("/add_comment", AddComment);

module.exports = router;
