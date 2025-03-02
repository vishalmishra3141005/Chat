const mongoose = require("mongoose");
const Types = mongoose.Types;

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    channels: {
      type: [String],
      default: [],
    },
  },
  {
    versionKey: false,
  }
);

schema.virtual('id', () => {
  return this._id;
});

const model = mongoose.model("user", schema);

module.exports = model;
