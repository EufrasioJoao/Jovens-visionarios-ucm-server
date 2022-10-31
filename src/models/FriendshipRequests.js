const db = require("./db");

// Checking if the FriendshipRequests Table exists
let sql = "select id from FriendshipRequests where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating FriendshipRequests Table
        let sql = `CREATE TABLE FriendshipRequests (id INT NOT NULL PRIMARY KEY auto_increment, Destiny varchar(100), Emissor varchar(100), RequestStatus TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating FriendshipRequests table", err);
            }

            if (result) {
                console.log("FriendshipRequests table Created");
            }
        });
    }
    if (result) console.log("FriendshipRequests table found");
});
