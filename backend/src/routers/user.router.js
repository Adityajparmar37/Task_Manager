const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// login route
router.post("/login", handler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error("Invalid Email or Password");
        }

    } catch (error) {
        console.error("Login error", error);
        res.status(500).send("Internal Server Error");
    }
}));



router.post("/signup", handler(async (req, res) => {
    try {
        const { name, email, password, conformPassword } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User Already Exists");
        }

        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error("Error Occurred!");
        }
    } catch (error) {
        console.error("SignUp error", error);
        res.status(500).send("Internal Server Error");
    }
}))

module.exports = router;
