const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("login", (name) => {
    console.log("login", name, socket.id);
    socket.broadcast.emit("new-login", name);
  });
  socket.on("send-to", (params) => {
    console.log("send-to", params);
    socket.to(params.recipient).emit("private-message", {
      message: params.message,
      sender: socket.id,
    });
  });
  socket.on("join-room", (roomName) => {
    console.log("join", roomName);
    socket.join(roomName);
    io.to(socket.id).emit("joined-room");
    io.to(roomName).emit("public-message", `New user ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log("started");
});
