const mongoose = require("mongoose");

async function createMongoConnection(url) {
    await mongoose.connect(url);
    return mongoose.connection;
}

module.exports = createMongoConnection;