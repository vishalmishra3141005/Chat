const UserModel = require("./model");

class UserApi {
    constructor(req, res) {
        this.request = req;
        this.response = res;
    }

    async createOne() {
        const payload = this.request.body;
        const newUser = new UserModel({name: payload.name, email: payload.email});
        console.log(newUser);
        await newUser.save();
        return newUser.toJSON({virtuals: true,});
    }


}

module.exports = UserApi;