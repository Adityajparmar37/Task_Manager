const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const authMid = require('../middlewares/authMiddleware.js');
const errorHandler = require('../middlewares/errorMiddleware.js');
const Notes = require('../models/notesModel.js');


router.use(authMid);

router.get("/mynotes", handler(async (req, res, next) => {

    res.send("gotme")

}));
module.exports = router;
