const db = require("./db");

// Checking if the messages Table exists
let sql = "select id from messages where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating messages Table
        let sql = `CREATE TABLE messages (id INT NOT NULL PRIMARY KEY auto_increment, Time varchar(100), RoomName TEXT, Description TEXT, Author TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating messages table", err);
            }

            if (result) {
                console.log("messages table Created");
            }
        });
    }
    if (result) console.log("messages table found");
});
