const db = require("./db");

// Checking if the Courses Table exists
let sql = "select id from Courses where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating Courses Table
        let sql = `CREATE TABLE Courses (id INT NOT NULL PRIMARY KEY auto_increment, Title TEXT , Description TEXT , Banner TEXT, Date varchar(2000), Likes TEXT , Teacher TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Courses table", err);
            }

            if (result) {
                console.log("Courses table Created");
            }
        });
    }
    if (result) console.log("Courses table found");
});
