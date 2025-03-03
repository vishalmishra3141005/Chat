const UserModel = require("../models/User/model");

class ChatController {
  constructor(socket) {
    this.socket = socket;
  }

  async add(payload) {
    const { to, from, message } = payload;

    if (!to || !from) this.socket.emit("error", { message: "to || from is empty" });   
    if (!message) this.socket.emit("error", { message: "message field is empty"});

    const toUser = await UserModel.findById(to).exec();
    const fromUser = await UserModel.findById(from).exec();

    if (!toUser) this.socket.emit("error", "To User is invalid, register First");
    if (!fromUser) this.socket.emit("error", "From User is invalid, User doesnt exists");

    console.log(toUser.id.toString());
    this.socket.to(toUser.id.toString()).emit("chat/receive", {
      from,
      message
    });
  }
}

module.exports = ChatController;
