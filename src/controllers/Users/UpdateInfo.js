const db = require("../../models/db");


const UpdateUser = async (req, res) => {
    const { Email, id, PhoneNumber, UniversityLocation, Biography } = req.body.valuesToSubmit;


        
        let sql = `update users set Email = "${Email}" where id = ${id};`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: `Falha ao atualizar avatar`,
                    succes: false,
                });
            }
            //if there already is a user with a similar username
            else if (result){
                let sql = `update users set PhoneNumber = "${PhoneNumber}" where id = ${id};`;

                db.query(sql, (err, result) => {
                    if (result){
                        let sql = `update users set UniversityLocation = "${UniversityLocation}" where id = ${id};`;

                        db.query(sql, (err, result) => {
                            if (result){
                                let sql = `update users set Biography = "${Biography}" where id = ${id};`;

                                db.query(sql, (err, result) => {
                                    res.json({
                                        message: `atualizado`,
                                        succes: true,
                                    });
                                });
                            }
                        });
                    }
                });
            }
                
        });
};


module.exports = { UpdateUser };
