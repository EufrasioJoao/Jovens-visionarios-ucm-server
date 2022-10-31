const db = require("./db");

// Checking if the Friends Table exists
let sql = "select id from Friends where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating Friends Table
        let sql = `CREATE TABLE Friends (id INT NOT NULL PRIMARY KEY auto_increment, RequestingFriendship varchar(100), RequestedFriendship varchar(100), RequestStatus TEXT, RoomName TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Friends table", err);
            }

            if (result) {
                console.log("Friends table Created");
            }
        });
    }
    if (result) console.log("Friends table found");
});
