const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("WithdrawalRequest", withdrawalSchema);
