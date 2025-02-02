const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: String,
    balance: { type: Number, default: 5 },
});

module.exports = mongoose.model("User", userSchema);
