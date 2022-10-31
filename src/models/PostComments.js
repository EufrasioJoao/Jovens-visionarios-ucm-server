const db = require("./db");

// Checking if the postComments Table exists
let sql = "select id from postComments where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating postComments Table
        let sql = `CREATE TABLE postComments (id INT NOT NULL PRIMARY KEY auto_increment, PostId TEXT, Description TEXT, Image TEXT, Author varchar(100) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating postComments table", err);
            }

            if (result) {
                console.log("postComments table Created");
            }
        });
    }
    if (result) console.log("postComments table found");
});
