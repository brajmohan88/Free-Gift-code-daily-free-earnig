const express = require("express");
const router = express.Router();

const validCodes = ["FREE5", "GIFT123", "EARN50"];

router.post("/redeem", (req, res) => {
    const { code } = req.body;

    if (validCodes.includes(code)) {
        return res.json({ success: true, message: "₹5 added to your wallet." });
    } else {
        return res.json({ success: false, message: "Invalid gift code!" });
    }
});

module.exports = router;
