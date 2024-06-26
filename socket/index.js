const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:3000" });

let onlineUsers = []

io.on("connection", (socket) => {
    console.log("new connection", socket.id);

    // socket.on("chat message", (msg) => {
    //     io.emit("chat message", msg);
    // });

    socket.on("addNewUser", (userId) => {
        !onlineUsers.some((user) => user.userId === userId) &&
            onlineUsers.push({
                userId,
                socketId: socket.id
            });
        console.log("onlineUsers", onlineUsers);

        io.emit("onlineUsers", onlineUsers);
    });


});

io.listen(3001);