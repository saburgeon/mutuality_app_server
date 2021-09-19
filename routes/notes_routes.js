const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');
const notesController = require('../controllers/notes');

//-----------------------------------Gets

//Get Notes for Home Page
router.get("/overview", notesController.getHomePageNotes);




//get all contact notes
router.get("/:id/all", notesController.getAllContactNotes);

//get contact favorite notes
router.get("/:id/favorites", notesController.getFavoriteNotes);

//get contact Important notes
router.get("/:id/important", notesController.getImportantNotes);

//get contact It Matters Notes
router.get("/:id/itMatters", notesController.getItMattersNotes);


//Get Contact Good to Know Notes
router.get("/:id/goodToKnow",notesController.getGoodToKnowNotes);

//Get contact I honestly don't know Notes
router.get("/:id/notSure", notesController.getNotSureNotes);

//Get contact Archived notes
router.get("/:id/archive", notesController.getArchivedNotes);



/*
router.get("/:id/notesLength", async (req, res) => {
    let [rows, fields] = await db.query(query.notesLength(req.params.id));
    res.send(rows);
})
*/


//-----------------------------------Posts

router.post("/add", notesController.postAddNote);



router.patch("/update", notesController.patchEditNote);

module.exports = router;