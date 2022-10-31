const db = require("../../models/db");

// handle user registation
const getAllPostsById = async (req, res) => {
    const id = req.params.id
    let sql = `select * from Posts where Author = '${id}';`;

    //inserting a new user into the database
    db.query(sql, (err, result) => {
        if (result) {
            res.json({ id, result, succes: true });
        }
        if (err) {
            res.json({ message: "Falha ao pesquisar post", succes: false });
            console.log(err);
        }
    });
};

module.exports = { getAllPostsById };
