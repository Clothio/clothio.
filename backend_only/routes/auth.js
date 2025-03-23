const express = require('express');
const User = require('../models/User');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

// ✅ Register User (Storing Plain-Text Passwords)
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        // Set user session or cookie
        res.cookie("user", { username, email }, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        res.status(201).json({ message: "User registered successfully", user: { username, email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Login User
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.cookie("user", { username: user.username, email: user.email }, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        res.status(200).json({ message: "Login successful", user: { username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Get Profile for Logged-in Users
router.get('/profile', async (req, res) => {
    try {
        const { user } = req.cookies;

        if (!user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User profile", profile: { username: currentUser.username, email: currentUser.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Change Password
router.put('/change-password', async (req, res) => {
    try {
        const { user } = req.cookies;
        const { oldPassword, newPassword } = req.body;

        if (!user || !oldPassword || !newPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser || currentUser.password !== oldPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        currentUser.password = newPassword; // Update the password
        await currentUser.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Logout User
router.post('/logout', (req, res) => {
    try {
        res.clearCookie("user");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

router.get('/get-users',async(req,res)=>{
const users =await User.find();
res.json(users)
})

module.exports = router;
