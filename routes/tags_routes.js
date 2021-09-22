const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');
const tagsController = require('../controllers/tags');

//------------------------------------------------------------------------------------GET REQUESTS

router.get('/all', tagsController.getAllTags);

router.get("/id", tagsController.getTagByID);

//------------------------------------------------------------------------------------POSTS REQUESTS

router.post("/add", tagsController.postAddTag);

//----------------------------------------------------------------------------------PATCH REQUESTS

router.patch("/update", tagsController.patchEditTag);

//----------------------------------------------------------------------------------DELETE REQUESTS

router.delete('/delete', tagsController.postDeleteTag);



module.exports = router;
