const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');
const messageController = require('../controllers/messages');


//-----------------------------------Gets

//Get all messages
router.get("/today", messageController.getAllMessages);

//-----------------------------------Posts

router.patch('/update', messageController.patchEditMessage);




module.exports = router;
