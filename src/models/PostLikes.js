const db = require("./db");

// Checking if the postLikes Table exists
let sql = "select id from postLikes where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating postLikes Table
        let sql = `CREATE TABLE postLikes (id INT NOT NULL PRIMARY KEY auto_increment, PostId TEXT, Author varchar(100) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating postLikes table", err);
            }

            if (result) {
                console.log("postLikes table Created");
            }
        });
    }
    if (result) console.log("postLikes table found");
});
