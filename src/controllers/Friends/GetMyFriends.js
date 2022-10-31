const db = require("../../models/db");

const GetMyFriends = async (req, res) => {
   
    const { Username, RequestStatus } = req.body;

    let sql = `select * from Friends where RequestingFriendship = '${Username}' or RequestedFriendship = '${Username}' and RequestStatus = 'accepted';`;

    // //searching if a the users are friend
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            return res.json({
                found: true,
                result,
            });
        }
        
        else if (result.length < 0) {
            return res.json({
                found: false,
                result,
            });
        }

        else if (err) {
            res.json({ message: "Falha ao pesquisar amigos", succes: false, err });
            console.log(err);
        }
    });




    
};

module.exports = { GetMyFriends };
