const db = require("../../models/db");

const CheckFrienshipRequest = async (req, res) => {
   
    const { Destiny, Emissor, RequestStatus } = req.body;
    
    let sql = `select * from FriendshipRequests where Emissor = '${Emissor}' and Destiny = '${Destiny}' and RequestStatus = 'waiting';`;

    // //searching if a the user already sent a FriendshipRequest
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.json({
                alreadySent: true,
                result
            });
        }
        
        // if a the user did not sent the FriendshipRequest
        if (result.length === 0) {
            res.json({
                alreadySent: false
            });
        }

        if (err) {
            res.json({ message: "Falha ao pesquisar pedido de amizade", succes: false, err });
            console.log(err);
        }
    });
};

module.exports = { CheckFrienshipRequest };
