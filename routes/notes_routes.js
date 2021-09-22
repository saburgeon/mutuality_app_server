const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');

//------------------------------------------------------------------------------------GET REQUESTS

router.get("/all", notesController.getAllNotes);

router.get("/:id", notesController.getNoteByID);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.post("/add", notesController.postAddNote);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.patch('/update', notesController.patchEditNote);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete("/delete", notesController.postDeleteNote);

module.exports = router;