const express = require("express");
const User = require("../models/userModel"); // ✅ सही Import Path
const router = express.Router();

// 🟢 सभी Users को प्राप्त करें
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 🟢 ID से User प्राप्त करें
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 🟢 नया User बनाएँ
router.post("/", async (req, res) => {
    const { name, balance } = req.body;
    const newUser = new User({ name, balance });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
