const db = require("./db");

// Checking if the Users Table exists
let sql = "select id from users where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating users Table
        let sql = `CREATE TABLE users (id INT NOT NULL PRIMARY KEY auto_increment, Username VARCHAR(100) NOT NULL , BirthDate TEXT , PhoneNumber TEXT , Interests TEXT , Email TEXT , Session TEXT , Friends int , Password varchar(2000) , UniversityLocation TEXT , Avatar TEXT , Banner TEXT , Biography TEXT , Type TEXT , UNIQUE INDEX Password_UNIQUE (Password ASC) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Users table", err);
            }

            if (result) {
                console.log("Users table Created");
            }
        });
    }
    if (result) console.log("Users table found");
});
