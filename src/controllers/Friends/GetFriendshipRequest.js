const db = require("../../models/db");

const GetFriendshipRequest = async (req, res) => {
   
    const username  = req.body.user;
    
    let sql = `select * from FriendshipRequests where  Destiny = '${username}' and RequestStatus= 'waiting';`;

    // //searching if a the user already sent a FriendshipRequest
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.json({
                result
            });
        }
        
        if (result.length === 0) {
            res.json({
                message: "sem pedidos de amizade",
                succes: false,
                result
            });
        }

        if (err) {
            res.json({ message: "Falha ao pesquisar pedidos de amizade", succes: false, err });
            console.log(err);
        }
    });
};

module.exports = { GetFriendshipRequest };
