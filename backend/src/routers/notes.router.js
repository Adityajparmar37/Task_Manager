const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const authMid = require('../middlewares/authMiddleware.js');
const errorHandler = require('../middlewares/errorMiddleware.js');
const Notes = require('../models/notesModel.js');


router.use(authMid);

router.get("/mynotes", handler(async (req, res, next) => {

    const notes = await Notes.find({ user: req.user.id })

    if (!notes) next(errorHandler(404, "Please create note"));
    res.json(notes);
}));

router.get("/getNoteById", handler(async (req, res, next) => {

    const noteId = req.params.id;

    const note = await Notes.findById(noteId);

    if (note) {
        res.json(note);
    } else {
        next(errorHandler(404, "Note not found"));
    }

    res.json(note);
}))

router.get("/create", handler(async (req, res, next) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        next(errorHandler(400, "Please Fill all the fields"));
    }

    else {

        const createNote = new Notes(
            {
                user: req.user.id,
                title,
                content,
                category,
            }
        );

        const createdNoted = await createNote.save();

        res.status(201).json(createdNoted);
    }
}))


router.get("/delete", handler(async (req, res, next) => {
    const noteId = req.params.id;
    console.log(noteId);
    const note = await Notes.findById("6587f6bc7b420f7f261130a1");

    console.log("Delete note ==> ", note)

    if (note.user.toString() !== req.user.id.toString()) {
        next(errorHandler(401, "You can't perform this action"));
    }

    if (note) {
        await note.remove();
        res.json({ message: "Note Removed successfully" });
    } else {
        next(errorHandler(404, "Note not Found"));
    }
}))



router.put("/update", handler(async (req, res) => {

    const { title, content, category } = req.body;

    const note = await Notes.findById(req.params.id);

    if (note.user.toString() !== req.user.id.toString()) {
        next(errorHandler(401, "You can't perform this action"));
    }

    if (note) {

        note.title = title;
        note.content = content;
        note.category = category;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        next(errorHandler(404, "Note not Found"));
    }
}));


module.exports = router;
