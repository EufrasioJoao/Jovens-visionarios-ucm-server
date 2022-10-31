const db = require("./db");

// Checking if the notifications Table exists
let sql = "select id from notifications where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating notifications Table
        let sql = `CREATE TABLE notifications (id INT NOT NULL PRIMARY KEY auto_increment, Destiny varchar(100), Emissor varchar(100), Description TEXT, Link TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating notifications table", err);
            }

            if (result) {
                console.log("notifications table Created");
            }
        });
    }
    if (result) console.log("notifications table found");
});
