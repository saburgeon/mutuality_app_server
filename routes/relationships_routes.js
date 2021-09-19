const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');

//-----------------------------------Gets

//get all relationships
router.get("/all", async (req, res) => {
    let [rows, fields] = await db.query(query.Select_All_Family_Members);
    res.send(rows);
});


//get contact relationships
router.get("/:id", async (req, res) => {
    let [rows, fields] = await db.query('SELECT * FROM FamilyMembers WHERE familyContactID=?', [[req.params.id]]);
    res.send(rows);
});

//get relationship count?
router.get("/:id/count", async (req, res) => {
    let [rows, fields] = await db.query(query.relationshipsLength(req.params.id), function (err, data) {
        if(err) console.log(err)

        res.send(rows);
    });

})


//-----------------------------------Posts

router.post("/add", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.Relationships_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.insertQuery(tableName, insertKeys), [[insertValues]]);
    res.sendStatus(201)
});

//-------------------------------------Patch

router.patch("/update", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.Relationships_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.updateQuery(tableName, insertKeys, insertValues), [insertValues[0]]);
    res.sendStatus(201)
});


module.exports = router;
