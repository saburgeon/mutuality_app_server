const express = require('express');
const router = express.Router();
const characteristicsController = require('../controllers/characteristics');

//------------------------------------------------------------------------------------GET REQUESTS

router.get("/all", characteristicsController.getAllCharacteristics);

router.get("/:id", characteristicsController.getAllCharacteristics);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.post("/add",characteristicsController.postAddCharacteristics);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.patch("/update", characteristicsController.patchEditCharacteristic);

router.patch("/bulkUpdate", characteristicsController.patchEditBulkCharacteristics);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete("/delete", characteristicsController.postDeleteCharacteristic);


module.exports = router;
