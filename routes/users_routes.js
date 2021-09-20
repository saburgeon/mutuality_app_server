const express = require("express");
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require("../config/db_constants");
const userController = require("../controllers/users");

//-----------------------------------Gets
//Get All Users
router.get("/all", userController.getAllUsers);


//get user by id
router.get("/:id", userController.getUserByID);

//get user favorites

//-------------------------------------Posts

router.post('/add', userController.postAddUser);
//update user data
/*
router.post("/update", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.User_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.updateQuery(tableName, insertKeys, insertValues), [insertValues[0]]);
    res.sendStatus(201)
});
*/

//update message of the day
router.post("/update/messages", async (req, res) => {
  //variable that change
  const data = JSON.parse(req.body.data);
  const tableName = dbc.Message_Of_The_Day_Table_Name;
  //constant variables
  let insertValues = Object.values(data);
  let insertKeys = Object.keys(data);
  let [rows, fields] = await db.query(
    query.updateQuery(tableName, insertKeys, insertValues),
    [insertValues[0]]
  );
  res.sendStatus(201);
});

//-------------------------------------Patch
router.patch("/update", userController.patchEditUser);

module.exports = router;
