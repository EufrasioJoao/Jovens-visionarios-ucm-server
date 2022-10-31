const db = require("./db");

// Checking if the LessonLikes Table exists
let sql = "select id from LessonLikes where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating LessonLikes Table
        let sql = `CREATE TABLE LessonLikes (id INT NOT NULL PRIMARY KEY auto_increment, LessonId TEXT, Author varchar(100) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating LessonLikes table", err);
            }

            if (result) {
                console.log("LessonLikes table Created");
            }
        });
    }
    if (result) console.log("LessonLikes table found");
});
