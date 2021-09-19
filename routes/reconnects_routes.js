const express = require('express');
const router = express.Router();
const reconnectController = require('../controllers/reconnects');


//-----------------------------------Gets


router.get("/all", reconnectController.getAllReconnects);

router.get("/user/:name", reconnectController.getUserReconnects);

router.get("/contact/:id", reconnectController.getContactReconnectTime);





module.exports = router;

