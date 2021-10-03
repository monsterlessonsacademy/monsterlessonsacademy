const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const users = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/users", (_, res) => {
  res.send(users);
});

io.on("connection", (socket) => {
  socket.on("user-connected", (user) => {
    users.push({ ...user, sockerId: socket.id });
    socket.broadcast.emit("user-connected", user);
    console.log("user-connected", users);
  });
  // socket.on("send-chat-message", (message) => {
  //   socket.broadcast.emit("chat-message", {
  //     message: message,
  //     name: users[socket.id],
  //   });
  // });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});

server.listen(3000, () => {
  console.log("listening on 3000");
});
