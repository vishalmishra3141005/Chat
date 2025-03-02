const mongoose = require("mongoose");
const Types = mongoose.Types;

const messageSchema = new mongoose.Schema({
    userid: { 
        type: Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
    },
});

const Schema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
    },
    message: {
        type: [messageSchema],
        default: [],
    },
});

const model = mongoose.model("channel", Schema);

module.exports = model;