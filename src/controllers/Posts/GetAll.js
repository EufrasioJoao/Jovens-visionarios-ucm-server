const db = require("../../models/db");

// handle user registation
const getAllPosts = async (req, res) => {
    let sql = `select * from Posts;`;

    //inserting a new user into the database
    db.query(sql, (err, result) => {
        if (result) {
            res.json({ result, succes: true });
        }
        if (err) {
            res.json({ message: "Falha ao pesquisar post", succes: false });
            console.log(err);
        }
    });
};

module.exports = { getAllPosts };
