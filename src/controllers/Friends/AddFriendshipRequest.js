const db = require("../../models/db");

const AddFrienshipRequest = async (req, res) => {
    
    const { Destiny, Emissor, RequestStatus } = req.body;
    
    let sql = `select * from FriendshipRequests where Emissor = '${Emissor}' and Destiny = '${Destiny}' and RequestStatus = '${RequestStatus}';`;

    // //searching if a the user already sent a FriendshipRequest
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.json({
                message: "Pedido de amizade ja foi mandado",
                alreadySent: true
            });
        }
        
        // if a the user did not sent the FriendshipRequest
        // adding data to FriendshipRequests table
        if (result.length === 0) {
            let sql = `select * from FriendshipRequests where Emissor = '${Destiny}' and Destiny = '${Emissor}' and RequestStatus = '${RequestStatus}';`;
            
            db.query(sql, (err, result) => {
                if (result.length > 0) {
                    res.json({
                        message: "Pedido de amizade ja foi mandado",
                        alreadySent: true
                    });
                }

                if (result.length === 0) {
                    let sql = `insert into FriendshipRequests (Destiny, Emissor, RequestStatus) values('${Destiny}', '${Emissor}', '${RequestStatus}');`;
        
                    db.query(sql, (err, result) => {
                        if(err) {
                            console.log(err);
                            res.json({ message: "Falha ao adicionar pedido de amizade", succes: false, err });
                        }
        
                        // adding data to friends table
                        else if(result){
                            let sql = `insert into Friends (RequestingFriendship, RequestedFriendship, RequestStatus, RoomName) values('${Emissor}', '${Destiny}', '${RequestStatus}', '${Emissor+'_'+Destiny}');`;
        
                            db.query(sql, (err, result) => {
                                if(err){
                                    console.log(err);
                                    res.json({ message: "Falha ao adicionar pedido de amizade", succes: false, err });
                                }else if(result){
                                    res.json({
                                        message: "Pedido de amizade mandado",
                                        sent: true
                                    });
                                }
                            });
                            
                        }
                    });

                }
            })        
        }

        if (err) {
            res.json({ message: "Falha ao adicionar pedido de amizade", succes: false, err });
            console.log(err);
        }
    });
};

module.exports = { AddFrienshipRequest };