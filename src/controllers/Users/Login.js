const bcrypt = require("bcrypt");
const db = require("../../models/db");
const JWT = require("jsonwebtoken");

var hashedPassword = null;
const secret = "well, well, that is a secret I guess";

// handle user registation 1
const LoginUser = async (req, res) => {
    const { Username, Password } = req.body.valuesToSubmit;
    const token = await JWT.sign({ Password }, secret, {
        expiresIn: 1209600,
    });

    // compares Password with hashedPassword 4
    const compareHash = async (Password, userPassword, userData) => {
        let isMatch = await bcrypt.compare(Password, userPassword);

        if (!isMatch) {
            res.json({ message: "Palavra Passe errada", succes: false });
        }
        if (isMatch) {
            res.json({ message: "Logado", userData, token, succes: true });
        }
    };

    //if the input values where  provided 2
    let sqlSelect = `select * from users where Username = '${Username}';`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided 3
        if (result.length > 0) {
            compareHash(Password, result[0].Password, result[0]);
        }

        //if there wasn't found any user with the values provided 5
        else if (result.length == 0) {
            res.json({
                message: "Usuario não existe",
                succes: false,
            });
        }
    });
};

module.exports = { LoginUser };
