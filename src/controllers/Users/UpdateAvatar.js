const db = require("../../models/db");


const UpdateAvatar = async (req, res) => {
    const { Avatar, id } = req.body.valuesToSubmit;

        let sql = `update users set Avatar = '${Avatar}' where id = ${id};`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: `Falha ao atualizar avatar`,
                    succes: false,
                });
            }
            //if there already is a user with a similar username
            else if (result)
                res.json({
                    message: `Avatar atualizado`,
                    succes: true,
                });
        });
};

module.exports = { UpdateAvatar };
