const db = require("../../models/db");

// function to add messages in the Db
const addMessages = ({ Author, Description, Time, RoomName })=>{
    let sqlInsert = `insert into messages (Author, RoomName, Description, Time) values('${Author}', '${RoomName}', '${Description}', '${Time}');`;
                        
    // inserting a new message into the database
    db.query(sqlInsert, (err, result)=>{
        if(result){
            // console.log('Message added')
        }
        if(err){
            console.log('Failure while adding the message')
            console.log(err);
        }
    })
}





module.exports = {addMessages};