const db = require("./db");

// Checking if the posts Table exists
let sql = "select id from posts where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating posts Table
        let sql = `CREATE TABLE posts (id INT NOT NULL PRIMARY KEY auto_increment, Image TEXT , Video TEXT , Description TEXT , AuthorImage TEXT, Likes int , Comments int , Author varchar(100) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating posts table", err);
            }

            if (result) {
                console.log("posts table Created");
            }
        });
    }
    if (result) console.log("posts table found");
});
