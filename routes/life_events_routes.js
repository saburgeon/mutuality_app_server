const express = require('express');
const router = express.Router();
const lifeEventController = require('../controllers/life_events');


//------------------------------------------------------------------------------------GET REQUESTS

// get all life events
router.get("/all", lifeEventController.getAllLifeEvents);

//Get life event by id
router.get("/:id", lifeEventController.getLifeEventByID);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.post("/add", lifeEventController.postAddLifeEvent);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.patch("/update", lifeEventController.patchEditLifeEvent);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete('/delete', lifeEventController.postDeleteLifeEvent);



module.exports = router;