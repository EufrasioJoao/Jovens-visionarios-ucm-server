const db = require("../../models/db");

// handle comment uploads
const FindCommentsById = async (req, res) => {
    const { PostId } = req.body;
    
    // query
    let sql = `select * from postComments where PostId = '${PostId}';`;

    db.query(sql, (err, result) => {
        if (result) {
            res.json({ result, succes: true });
        }

        if (err) {
            console.log(err);
            res.json({
                succes: false,
            });
        }
    });
};

module.exports = { FindCommentsById };
