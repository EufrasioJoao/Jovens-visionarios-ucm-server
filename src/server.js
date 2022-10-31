// modules
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const moment = require("moment");

// externals modules
const db = require("./models/db");
const server_routes = require("./routes/Index");
const formatMessage = require("./utils/formatMessage");
const { addMessages } = require("./controllers/Messages/AddMessages.js");

//middlewares and the router
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(server_routes);

app.get("/", async (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

//creating the server
const server = http.createServer(app);
const io = new Server(server, {
    /* instantiating new server with socket.io */
    cors: {
        origin: ["http://localhost:3000", "*"],
        methods: ["POST", "GET", "PUT", "DELETE"],
    },
});

// listening to the connection event from the client
io.on("connection", (socket) => {
    /* join_room event to join room */
    socket.on("join_room", (data) => {
        socket.join(data);
    });

    /* send_message event to send messages*/
    socket.on("send_message", ({ author, message, room }) => {
        io.to(room).emit(
            "receive_message",
            formatMessage(author, message, socket.id)
        );

        //function to add messages in the database
        addMessages({
            Author: author,
            Description: message,
            Time: moment().format("h:mm a"),
            RoomName: room,
        });
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log("server is running on port " + PORT));
