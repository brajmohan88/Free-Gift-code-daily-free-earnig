const express = require("express");
const Withdrawal = require("../models/withdrawalRequests");
const router = express.Router();

router.post("/request", async (req, res) => {
    const { userId, amount } = req.body;
    const request = new Withdrawal({ userId, amount });
    await request.save();
    res.json({ message: "Request Submitted" });
});

module.exports = router;
