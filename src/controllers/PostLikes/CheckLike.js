const db = require("../../models/db");

// handle post uploads
const CheckLike = async (req, res) => {
    const { PostId, Author } = req.body;

    let sql = `select * from PostLikes where PostId = '${PostId}' and Author = '${Author}';`;

    //searching if a the user alreay liked the post
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.json({
                message: "Like found",
                like: true,
            });
        }

        if (result.length === 0) {
            res.json({
                message: "Like not found",
                like: false,
            });
        }

        if (err) {
            res.json({ message: "Falha ao procurar like", succes: false });
            console.log(err);
        }
    });
};

module.exports = { CheckLike };
