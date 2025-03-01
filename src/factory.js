const express = require("express");

const createMongoConnection = require("./services/mongoose");

const Routes = require("./routes");
async function startFactory(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  await createMongoConnection(process.env.mongo_url);


  app.use(Routes);
}

module.exports = startFactory;
