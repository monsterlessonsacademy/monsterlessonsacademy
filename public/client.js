var socket = io();

socket.emit("user-connected", "foo");

socket.on("user-connected", (msg) => {
  console.log("user-connected", msg);
});
