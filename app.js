require("dotenv").config();
const express = require("express");
const startFactory = require("./src/factory");
const app = express();

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

class Main {
  static async run() {
    await startFactory(app);
    app.listen(PORT, HOST, () => {
      console.log(`Server up and running at ${HOST}:${PORT}`);
    });
  }
}

Main.run();
