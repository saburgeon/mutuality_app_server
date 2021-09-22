const express = require('express');
const router = express.Router();
const characteristicsController = require('../controllers/characteristics');

//------------------------------------------------------------------------------------GET REQUESTS

router.get("/all", characteristicsController.getAllCharacteristics);

router.get("/:id", characteristicsController.getAllCharacteristics);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.patch("/add",characteristicsController.postAddCharacteristics);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.post("/update", characteristicsController.patchEditCharacteristic);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete("/delete", characteristicsController.postDeleteCharacteristic);


module.exports = router;
