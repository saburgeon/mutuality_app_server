const express = require("express");
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require("../config/db_constants");
const userController = require("../controllers/users");

//--------------------------------------------------------Gets

//Get All Users
router.get("/all", userController.getAllUsers);

//get user by id
router.get("/:id", userController.getUserByUID);

//get all user data
router.get('/get/all/:id', userController.getAllUserData);

//------------------------------------------------------------Posts

router.post('/add', userController.postAddUser);

//------------------------------------------------------------Patch

router.patch("/update", userController.patchEditUser);

//------------------------------------------------------------Delete

router.delete('/delete', userController.postDeleteUser);

module.exports = router;
