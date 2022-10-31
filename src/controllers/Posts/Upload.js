const db = require("../../models/db");

// handle post uploads
const uploadPost = async (req, res) => {
    const { Image, Video, Description, Likes, Comments, Author, AuthorImage } =
        req.body.valuesToSubmit;
        
    let sql = `insert into Posts (Image, Description, Author, Likes, Comments, AuthorImage) values("${Image}", '${Description}', '${Author}', '${Likes}', '${Comments}', '${AuthorImage}');`;

    //inserting a new post into the database
    db.query(sql, (err, result) => {
        if (result) {
            res.json({ message: "Post adicionado com sucesso", succes: true });
        }
        if (err) {
            res.json({ message: "Falha ao adicionar post", succes: false });
            console.log(err);
        }
    });
};

module.exports = { uploadPost };
