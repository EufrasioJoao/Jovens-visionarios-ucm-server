const db = require("../../models/db");

// handle post uploads
const AddLike = async (req, res) => {
    const { PostId, Author } = req.body;

    let sql = `select * from PostLikes where PostId = '${PostId}' and Author = '${Author}';`;

    //searching if a the user alreay liked the post
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            let sql = `delete from PostLikes where PostId = '${PostId}' and Author = '${Author}';`;

            db.query(sql, (err, result) => {
                let sql = `update posts set Likes = Likes-1 where id = ${PostId};`;

                db.query(sql, (err, result) => {
                    res.json({
                        message: "Like deletado com sucesso",
                        like: false,
                    });
                });
            });
        }

        // if a the user did not liked the post
        if (result.length === 0) {
            let sql = `insert into PostLikes (PostId, Author) values(${PostId}, '${Author}');`;

            db.query(sql, (err, result) => {
                let sql = `update posts set Likes = Likes+1 where id = ${PostId};`;

                db.query(sql, (err, result) => {
                    res.json({
                        message: "Like adicionado com sucesso",
                        like: true,
                    });
                });
            });
        }

        if (err) {
            res.json({ message: "Falha ao adicionar like", succes: false });
            console.log(err);
        }
    });
};

module.exports = { AddLike };
