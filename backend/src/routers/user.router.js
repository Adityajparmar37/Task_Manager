const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');

// login route
router.post("/login", handler(async (req, res) => {
    try {
        const { email, password } = req.body;
        res.status(200).send("Login successfully");
        console.log("Backend Login Successfully ==>" + email + " " + password);
    } catch (error) {
        console.error("Login error", error);
        res.status(500).send("Internal Server Error");
    }
}));

// signup route
router.post("/signup", handler(async (req, res) => {
    try {
        const { name, email, password, conformPassword } = req.body;
        console.log("Backend Signup successfully =>" + name + " " + email + " " + password + " " + conformPassword);
        res.status(200).send("Successfull Signup");
    } catch (error) {
        console.error("SignUp error", error);
        res.status(500).send("Internal Server Error");
    }
}));


module.exports = router;
