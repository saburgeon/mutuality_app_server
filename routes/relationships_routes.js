const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');
const relationshipsController = require("../controllers/relationships");

//------------------------------------------------------------------------------------GET REQUESTS

router.get("/all", relationshipsController.getAllRelationships);

router.get("/:id", relationshipsController.getRelationshipByID);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.patch("/add",relationshipsController.postAddRelationship);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.post("/update", relationshipsController.patchEditRelationship);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete("/delete", relationshipsController.postDeleteRelationship);



module.exports = router;
