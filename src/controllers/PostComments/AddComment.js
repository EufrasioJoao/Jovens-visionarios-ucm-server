const db = require("../../models/db");

// handle comment uploads
const AddComment = async (req, res) => {
    const { PostId, Author, Description, Image } = req.body;

    // query
    let sql = `insert into postComments (PostId, Author, Description, Image) values('${PostId}', '${Author}', '${Description}', '${Image}');`;

    db.query(sql, (err, result) => {
        if (result) {
            let sql = `insert into PostLikes (PostId, Author) values(${PostId}, '${Author}');`;

            db.query(sql, (err, result) => {
                let sql = `update posts set Comments = Comments+1 where id = ${PostId};`;

                db.query(sql, (err, result) => {
                    res.json({ message: "Comentario adicionado", succes: true });
                });
            });
        }

        if (err) {
            res.json({
                message: "Falha ao adicionar Comentario",
                succes: false,
            });
            console.log(err);
        }
    });
};

module.exports = { AddComment };
