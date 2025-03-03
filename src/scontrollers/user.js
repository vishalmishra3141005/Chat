
const UserModel = require("../models/User/model");

class UserController {
  constructor(socket) {
    this.socket = socket;
  }

  async login(payload) {
    const { user_id } = payload;

    const user = await UserModel.findById(user_id).exec();
    if (!user) this.socket.emit("error", "User is invalid, User doesnt exists");

    this.socket.join(user_id);
    this.socket.emit("user/logs", "Loginned and Room Joined");
  }
}

module.exports = UserController;
