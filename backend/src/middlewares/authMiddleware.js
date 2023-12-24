const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const token = req.headers.access_token;

    if (!token) return res.status(401).send();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded._id).select("-password");
        console.log("user jwt verify ==> ", req.user);
    } catch (error) {
        console.log("AuthMiddleware backend ==> ", error)
        res.send(401).send();
    }

    return next();
}

module.exports = authMiddleware;