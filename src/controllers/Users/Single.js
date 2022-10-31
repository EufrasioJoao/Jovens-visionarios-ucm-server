const db = require("../../models/db");

// handle user registation 1
const GetUser = async (req, res) => {
    const Username = req.params.username;
    let sqlSelect = `select * from users where Username = '${Username}';`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided 3
        if (result.length > 0) {
            res.json({
                result: result[0],
                succes: true,
            });
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

module.exports = { GetUser };
