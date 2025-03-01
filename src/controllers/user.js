const UserApi = require("../models/User/api");

class UserController {
    constructor(req, res) {
        this.request = req;
        this.response = res;
    }
    
    async signup() {
        const userApi = new UserApi(this.request, this.response);
        const response = await userApi.createOne();
        this.response.status(200).json(response);
    }

    async login() {

    }


}


module.exports = UserController;