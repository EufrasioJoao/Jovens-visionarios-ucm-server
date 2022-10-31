const db = require("../../models/db");

// handle user registation 1
const GetAll = async (req, res) => {
    let sqlSelect = `select * from users;`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided 3
        if (result.length > 0) {
            res.json({
                result: result,
                succes: true,
            });
        }

        //if there wasn't found any user with the values provided 5
        else if (result.length == 0) {
            res.json({
                message: "Falha ao pesquisar usuarios",
                succes: false,
            });
        }
    });
};

module.exports = { GetAll };
