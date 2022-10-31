const db = require("./db");

// Checking if the Lessons Table exists
let sql = "select id from Lessons where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating Lessons Table
        let sql = `CREATE TABLE Lessons (id INT NOT NULL PRIMARY KEY auto_increment, CourseId VARCHAR(100), Title TEXT , Description TEXT , Banner TEXT , Video TEXT , Type TEXT , Date varchar(2000) , Likes TEXT , Comments TEXT , Teacher TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Lessons table", err);
            }

            if (result) {
                console.log("Lessons table Created");
            }
        });
    }
    if (result) console.log("Lessons table found");
});
