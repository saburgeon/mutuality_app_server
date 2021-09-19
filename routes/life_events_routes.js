const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const dbc = require("../config/db_constants");
const router = express.Router();
const lifeEventController = require('../controllers/life_events');


//-------------------------------------------------------Gets
// get all life events
router.get("/all/years", lifeEventController.getAllLifeEventsYears);

router.get("/all/events/:yearStart/:yearEnd", lifeEventController.getAllLifeEventsEvents);


//Get Contact's life event years
router.get("/years/:id", lifeEventController.getContactLifeEventsYears);


router.get("/events/:id/:yearStart/:yearEnd", lifeEventController.getContactLifeEventsEvents);


//-------------------------------------------------------Posts

router.post("/add", lifeEventController.postAddLifeEvent);

//-------------------------------------------------------Patch

router.patch("/update", lifeEventController.patchEditLifeEvent);




module.exports = router;