const bcrypt = require("bcrypt");
const db = require("../../models/db");
const JWT = require("jsonwebtoken");

const secret = "well, well, that is a secret I guess";

// handle user registation
const addUser = async (req, res) => {
    const { BirthDate, Email, Password, Type, UniversityLocation, Username } =
        req.body.valuesToSubmit;

    const hashedPassword = await bcrypt.hash(Password, 10);
    const token = await JWT.sign({ Password }, secret, {
        expiresIn: 1209600,
    });

    //if the input values where  provided
    if (
        BirthDate &&
        Email &&
        Password &&
        Type &&
        UniversityLocation &&
        Username
    ) {
        let sqlSelect = `select * from users where Username = '${Username}';`;

        db.query(sqlSelect, (err, result) => {
            if (err) return console.log(err);
            //if there already is a user with a similar username
            else if (result.length > 0)
                return res.json({
                    message: `Nome de usuario ocupado`,
                    succes: false,
                });
            //if there are no users with a similar username
            else if (result.length == 0) {
                let sqlSelect = `select * from users where Password = '${hashedPassword}';`;

                //if there are users with a similar password
                db.query(sqlSelect, (err, result) => {
                    if (err) return console.log(err);
                    //if there is a user with a similar password
                    else if (result.length > 0)
                        return res.json({
                            message: `Escolha outra palavra passe`,
                            succes: false,
                        });
                    //if there are no users with a similar password
                    else if (result.length == 0) {
                        let sqlInsert = `insert into users (BirthDate, Email, Password, Type, UniversityLocation, Username, Friends, Avatar, Biography) values('${BirthDate}', '${Email}', '${hashedPassword}', '${Type}', '${UniversityLocation}', '${Username}', 0, '/assets/images/me1.jpg', 'Um usuario da plataforma jovens visionarios');`;

                        //inserting a new user into the database
                        db.query(sqlInsert, (err, result) => {
                            if (result) {
                                return res.json({
                                    message: "Usuario adicionado",
                                    succes: true,
                                    token,
                                });
                            }
                            if (err) {
                                res.json({
                                    message: "Falha ao adicionar usuario",
                                    succes: false,
                                });
                                console.log(err);
                            }
                        });
                    }
                });
            }
        });
    }
    // if the all the values were not succesfuly provided
    else {
        return res.json({ message: "Fill all fields", succes: false });
    }
};

module.exports = { addUser };
