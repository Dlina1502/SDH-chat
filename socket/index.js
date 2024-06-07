const {Server }= require("socket.io");

const io = new Server({ cors: "http://localhost:3000"});

let onlineUsers = []

io.on("connection", (socket) => {
    console.log("new connection", socket.id);

    // socket.on("chat message", (msg) => {
    //     io.emit("chat message", msg);
    // });

    socket.on("addNewUser", (userId) => {
        usersChats.push({
            userId,
            socketId: socket.id
        });
    });
}); 

io.listen(3001);