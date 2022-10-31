const db = require("./db");

// Checking if the LessonComments Table exists
let sql = "select id from LessonComments where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating LessonComments Table
        let sql = `CREATE TABLE LessonComments (id INT NOT NULL PRIMARY KEY auto_increment, LessonId TEXT, Description TEXT, Author varchar(100) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating LessonComments table", err);
            }

            if (result) {
                console.log("LessonComments table Created");
            }
        });
    }
    if (result) console.log("LessonComments table found");
});
