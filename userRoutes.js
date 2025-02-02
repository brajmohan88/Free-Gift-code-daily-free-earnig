const express = require("express");
const router = express.Router();

// Dummy user data (later you can connect this with MongoDB)
const users = [
    { id: 1, name: "Rahul", balance: 50 },
    { id: 2, name: "Amit", balance: 100 }
];

// Get all users
router.get("/", (req, res) => {
    res.json(users);
});

// Get user by ID
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// Create a new user
router.post("/", (req, res) => {
    const { name, balance } = req.body;
    const newUser = { id: users.length + 1, name, balance };
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
