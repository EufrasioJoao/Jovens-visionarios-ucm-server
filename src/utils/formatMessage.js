const moment = require("moment");

// formats messages
function formatMessage(author,message, id) {
    return {
        Author: author,
        Description: message,
        Time: moment().format("h:mm a"),
        id: `${id+'akns'+Math.floor(Math.random()*1000000)+'annds'+id+id+'aknsannds'+id+id+'akns'+Math.floor(Math.random()*1000000)+'annds'+id+id+'aknsannds'+id}`
    };
}

module.exports = formatMessage;