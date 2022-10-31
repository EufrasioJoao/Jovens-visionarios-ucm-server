const db = require("./db");

// Checking if the messageRooms Table exists
let sql = "select id from messageRooms where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating messageRooms Table
        let sql = `CREATE TABLE messageRooms (id INT NOT NULL PRIMARY KEY auto_increment, RoomName TEXT, OwnerOne TEXT, OwnerTwo TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating messageRooms table", err);
            }

            if (result) {
                console.log("messageRooms table Created");
            }
        });
    }
    if (result) console.log("messageRooms table found");
});
