const express = require("express");

const userRoutes = require("./user");

const Router = express.Router();


Router.use("/user", userRoutes);


module.exports = Router;
