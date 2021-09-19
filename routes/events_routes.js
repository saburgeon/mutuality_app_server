const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');
const eventController = require('../controllers/events');


//-----------------------------------Gets

// all events
router.get("/all", eventController.getAllEvents);

// all events by contact
router.get("/all/:contactID",eventController.getAllContactEvents);

// last event that occurred before Now
router.get('/lastConnected/:eventContactID', eventController.getLastEventBeforeNow);

// all events by user
router.get("/user/all/:primaryUser", eventController.getAllUserEvents);

//Check if any events exists, otherwise we will create a new one to track when the contact was created.
//todo this can be removed once the event is added upon the creation of the contact, instead of when they're first accessed.
router.get("/existsCheck/:id", eventController.checkIfEventsExists);


//-----------------------------------Posts

router.post("/add", eventController.postAddEvent);


//-------------------------------------Patch

router.patch("/update", eventController.patchEditEvent);


module.exports = router;

