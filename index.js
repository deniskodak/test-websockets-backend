const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

const listenClient = require("./socket");

server.listen(process.env.PORT || 4000, function () {
  console.log("Server running in port 4000");
});

app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

listenClient(io);
