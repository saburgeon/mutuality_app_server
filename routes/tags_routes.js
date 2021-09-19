const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');
const tagsController = require('../controllers/tags');

//-----------------------------------Gets

//Get contact tags
router.get("/contact/:id", tagsController.getContactTags);



//-----------------------------------Posts

router.post("/add", tagsController.postAddTag);

//
router.patch("/update", tagsController.patchEditTag);



module.exports = router;
