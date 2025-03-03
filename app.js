require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const startFactory = require("./src/factory");
const socketFactory = require("./src/sfactory");

const app = express();
const server = createServer(app);
const io = new Server(server);



io.on("connection", (socket) => {
  console.log("user connected!");
  socketFactory(socket);
  
  socket.on("disconnect", () => {
    console.log("user disconnted!");
  });
});

class Main {
  static async run() {
    await startFactory(app);
    server.listen(PORT, HOST, () => {
      console.log(`Server up and running at ${HOST}:${PORT}`);
    });
  }
}

Main.run();
