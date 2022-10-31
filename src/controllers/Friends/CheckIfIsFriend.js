const db = require("../../models/db");

const CheckIfIsFriend = async (req, res) => {
   
    const { Destiny, Emissor, RequestStatus } = req.body;
    // res.send('oi')
    
    let sql = `select * from FriendshipRequests where Emissor = '${Emissor}' and Destiny = '${Destiny}' and RequestStatus = 'accepted';`;

    // //searching if a the users are friend
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            return res.json({
                isFriend: true,
                result,
                none: result.length < 0 
            });
            return 1;
        }
        
        else if (result.length === 0) {
            let sqls = `select * from FriendshipRequests where Emissor = '${Destiny}' and Destiny = '${Emissor}' and RequestStatus = 'accepted';`;

            // //searching if a the users are friend
            db.query(sqls, (err, result) => {
                if (result.length > 0) {
                    res.json({
                        isFriend: true,
                        result
                    });
                }
                
                if (result.length === 0) {
                    res.json({
                        isFriend: false
                    });
                }

                if (err) {
                    res.json({ message: "Falha ao pesquisar pedido de amizade", succes: false, err });
                    console.log(err);
                }
            });
        }

        else if (err) {
            res.json({ message: "Falha ao pesquisar pedido de amizade", succes: false, err });
            console.log(err);
        }
    });




    
};

module.exports = { CheckIfIsFriend };
