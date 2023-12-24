// const express = require('express');
// const router = express.Router();
// const handler = require('express-async-handler');
// const authMiddleware = require('../middlewares/authMiddleware.js');
// const errorHandler = require('../middlewares/errorMiddleware.js');
// const Notes = require('../models/notesModel.js');

// router.use(authMiddleware);


// router.get("/mynotes", handler(async (req, res, next) => {
//     try {
//         const Notes = await Notes.find({ user: req.user._id });
//         res.json(Notes);
//     } catch (error) {
//         next(error);
//     }
// }))


// router.get("/getNoteById", handler(async (req, res, next) => {

//     const note = await Notes.findById(req.params.id);

//     if (note) {
//         res.json(note);
//     } else {
//         next(errorHandler(404, "Note not found"));
//     }
// }));


