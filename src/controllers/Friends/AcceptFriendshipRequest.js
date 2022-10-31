const db = require("../../models/db");

const AcceptFriendshipRequest = async (req, res) => {
    
    const { Destiny, Emissor, RequestStatus, id } = req.body;

    let sql = `update FriendshipRequests set RequestStatus = 'accepted' where id = ${id};`;

    
    db.query(sql, (err, result) => {
            
            let sql = `update Friends set RequestStatus = 'accepted' where RoomName = '${Emissor+'_'+Destiny}';`;
            
            db.query(sql, (err, result) => {
                if(err){
                    console.log(err);
                    res.json({ message: "Falha ao atualizar pedido de amizade", succes: false, err });
                }else if(result){
                    let sql = `update users set Friends = Friends+1 where Username = '${Emissor}';`;
                    
                    db.query(sql, (err, result) => {
                        let sql = `update users set Friends = Friends+1 where Username = '${Destiny}';`;
                        db.query(sql, (err, result) => {

                            res.json({
                                message: "Pedido de amizade aceitado",
                                updated: true,
                                result
                            });
                        })
                    })
                }
            });
                    

        if (err) {
            res.json({ message: "Falha ao atualizar pedido de amizade", succes: false, err });
            console.log(err);
        }
    });
};

module.exports = { AcceptFriendshipRequest };
