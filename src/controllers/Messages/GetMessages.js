const db = require("../../models/db");


// function to get messages from the Db
function GetMessages(req, res){
    const {RoomName} = req.body

    // queryng all messages
    let sql = `select * from messages where RoomName = '${RoomName}';`;

        db.query(sql, (err, result) => {
            //if there was found any room
            if (result.length > 0) {
                res.json({RoomName, result, succes: true});
            }
            //if there wasn't found any room
            else if (result.length === 0) {
                res.json({
                    RoomName, succes: false
                });
            }
        });
};

module.exports = {GetMessages};