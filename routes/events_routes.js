const express = require('express');

const router = express.Router();
const eventController = require('../controllers/events');


//------------------------------------------------------------------------------------GET REQUESTS
// all events
router.get("/all", eventController.getAllEvents);

router.get('/:id', eventController.getEventByID);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.post("/add", eventController.postAddEvent);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.patch("/update", eventController.patchEditEvent);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete("/delete", eventController.postDeleteEvent);



module.exports = router;

