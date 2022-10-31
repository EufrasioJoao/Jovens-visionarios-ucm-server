const db = require("../../models/db");

const DeleteFrienshipRequest = async (req, res) => {
    
    const { Destiny, Emissor, RequestStatus } = req.body;
    
    
    let sql = `select * from FriendshipRequests where Emissor = '${Emissor}' and Destiny = '${Destiny}' and RequestStatus = '${RequestStatus}';`;

    // //searching if a the user already sent a FriendshipRequest
    db.query(sql, (err, result) => {
        
        if (result.length) {
            let sql = `delete from FriendshipRequests where Destiny = '${Destiny}' and Emissor = '${Emissor}' and RequestStatus  = '${RequestStatus}';`;

            db.query(sql, (err, result) => {
                if(err) {
                    console.log(err);
                    res.json({ message: "Falha ao deletar pedido de amizade", succes: false, err });
                }

                // deleting data from friends table
                else if(result){
                    let sql = `delete from Friends where RequestingFriendship = '${Emissor}' and RequestedFriendship = '${Destiny}' and RequestStatus = '${RequestStatus}' and RoomName = '${Emissor+'_'+Destiny}';`;


                    db.query(sql, (err, result) => {
                        if(err){
                            console.log(err);
                            res.json({ message: "Falha ao deletar pedido de amizade", succes: false, err });
                        }else if(result){
                            res.json({
                                message: "Pedido de amizade deletado",
                                deleted: true
                            });
                        }
                    });
                    
                }
            });
        }

        if (err) {
            res.json({ message: "Falha ao deletar pedido de amizade", succes: false, err });
            console.log(err);
        }
    });
};

module.exports = { DeleteFrienshipRequest };
