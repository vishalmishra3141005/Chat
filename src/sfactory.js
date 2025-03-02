const SUserController = require("./scontrollers/user");
const SChatController = require("./scontrollers/chat");

function ToController(controllerClass, ev, socket) {
  const action = ev.split("/")[1];
  return async function (payload) {
    const controller = new controllerClass(socket);
    await controller[action](payload);
  };
}

function sfactory(socket) {
  socket.on("user/login", ToController(SUserController, ev, socket));
  socket.on("chat/add", ToController(SChatController, ev, socket));
}

module.exports = sfactory;
