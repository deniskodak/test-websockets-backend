const uuidv4 = require("uuid").v4;

class Connection {
  constructor(io, socket) {
    this.socket = socket;
    this.io = io;

    socket.on("getMessages", () => this.getMessages());
    socket.on("message", (value) => this.handleMessage(value));
    socket.on("disconnect", () => this.disconnect());
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }

  sendMessage(message) {
    this.io.sockets.emit("message", message);
  }

  getMessages() {
    messages.forEach((message) => this.sendMessage(message));
  }

  handleMessage(message) {
    console.log(message);
  }

  disconnect() {
    console.log("disconnected");
  }
}

function listenClient(io) {
  io.on("connection", (socket) => {
    new Connection(io, socket);
  });
}

module.exports = listenClient;
