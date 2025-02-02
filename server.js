const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const giftCodeRoutes = require("./routes/giftCodeRoutes");
const withdrawalRoutes = require("./routes/withdrawalRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/gift-codes", giftCodeRoutes);
app.use("/api/withdrawals", withdrawalRoutes);

// Connect to Database
mongoose.connect("mongodb+srv://Brajmohan8800:<db_password>@cluster0.n4v1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/", (req, res) => {
    res.send("Backend is Running Successfully!");
});
