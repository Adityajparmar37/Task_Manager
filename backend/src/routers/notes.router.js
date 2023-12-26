const { query } = require('express');
const express = require('express');
const router = express.Router();
const handler = require('express-async-handler');
const authMid = require('../middlewares/authMiddleware.js');
const errorHandler = require('../middlewares/errorMiddleware.js');
const Notes = require('../models/notesModel.js');

router.use(authMid);

// Create a note
router.post("/create", handler(async (req, res, next) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        return next(errorHandler(400, "Please fill all the fields"));
    }

    const createNote = new Notes({
        user: req.user.id,
        title,
        content,
        category,
        success: true,
    });

    const createdNote = await createNote.save();

    res.status(201).json(createdNote);
}));




router.get("/mynotes", handler(async (req, res) => {
    const Filters = req.query;

    const { keywordSearch, title, Category } = Filters;
    const sort = req.query.sort;
    console.log("Sort:", sort);
    console.log("Filters:", Filters);
    console.log("Filter title:", Filters.title);

    const queryObject = {};

    if (title) {
        queryObject.title = { $regex: new RegExp(title, 'i') };
    }

    try {
        const notes = await Notes.find({ user: req.user.id, ...queryObject })
            .sort({ createdAt: sort === 'new' ? -1 : 1 });
        console.log("Backend search and sort: ", notes);
        res.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));


router.delete("/delete/:id", handler(async (req, res, next) => {
    const noteId = req.params.id;
    // console.log("notID==>", noteId);
    const note = await Notes.findById(noteId);

    if (!note) {
        return next(errorHandler(404, "Note not found"));
    }

    if (note.user.toString() !== req.user.id.toString()) {
        return next(errorHandler(401, "You can't perform this action"));
    }

    await Notes.deleteOne({ _id: noteId });
    res.json({ message: "Note removed successfully" });
}));


router.put("/update/:id", handler(async (req, res, next) => {
    const { title, content, category } = req.body;
    const noteId = req.params.id;
    const note = await Notes.findById(noteId);

    if (!note) {
        return next(errorHandler(404, "Note not found"));
    }

    if (note.user.toString() !== req.user.id.toString()) {
        return next(errorHandler(401, "You can't perform this action"));
    }

    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
}));

module.exports = router;
