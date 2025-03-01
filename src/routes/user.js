const express = require("express");

const UserController = require("../controllers/user");

const Router = express.Router();

function ToController(controllerClass, action) {
  return async function (req, res) {
    const controller = new controllerClass(req, res);
    return await controller[action]();
  };
}

Router.post("/login", ToController(UserController, "login"));
Router.post("/signup", ToController(UserController, "signup"));


module.exports = Router;
