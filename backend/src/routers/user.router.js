const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const errorHandler = require('../middlewares/errorMiddleware');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// login route
router.post("/login", handler(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return next(errorHandler(404, 'User not found'));

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
                success: true
            });
        } else {
            next(errorHandler(401, "Wrong Credentials"))
        }

    } catch (error) {
        next(error);
    }
}));



router.post("/signup", handler(async (req, res, next) => {
    try {
        const { name, email, password, conformPassword } = req.body;


        if (!name || !email || !password || !conformPassword) {
            next(errorHandler(401, "Please fill the fields"))
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            next(errorHandler(400, "User Already exist"))
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
                token: generateToken(user._id),
                success: true
            });
        } else {
            next(errorHandler(400, "Something Went Wrong"));
        }
    } catch (error) {
        // console.error("SignUp error", error);
        next(error);
    }
}))

module.exports = router;
