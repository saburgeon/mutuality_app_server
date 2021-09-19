const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');

//-----------------------------------Gets

router.get("/categories", async (req, res) => {
    let [rows, fields] = await db.query(query.Select_All_Category);
    res.send(rows);
});


router.get("/characteristics", async (req, res) => {
    let [rows, fields] = await db.query(query.Select_All_Characteristics);
    res.send(rows);
});

router.get("/categories/:id", async (req, res) => {
    let [rows, fields] = await db.query(query.categoriesByID, [[req.params.id]]);
    res.send(rows);
});

//Get all Categories by ID
router.get("/characteristics/:id", async (req, res) => {
    let [rows, fields] = await db.query(query.characteristicsByID, [[req.params.id]]);
    res.send(rows);
});


//Check categories
router.get("/categories/:name/:id", async (req, res) => {
    let [rows, fields] = await db.query(query.checkCategories, [[req.params.name], [req.params.id]]);
    res.send(rows);
});


//-----------------------------------Posts

router.post("/add/category", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.Category_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.insertQuery(tableName, insertKeys), [[insertValues]]);
    res.sendStatus(201)
});


router.post("/add/characteristic", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.Traits_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.insertQuery(tableName, insertKeys), [[insertValues]]);
    res.sendStatus(201)
});

router.patch("/update/characteristic", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.Traits_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.updateQuery(tableName, insertKeys, insertValues), [insertValues[0]]);
    res.sendStatus(201)
});

router.patch("/update/category", async (req, res) => {
    //variable that change
    const data = JSON.parse(req.body.data);
    const tableName = dbc.Category_Table_Name;
    //constant variables
    let insertValues = Object.values(data);
    let insertKeys = Object.keys(data);
    let [rows, fields] = await db.query(query.updateQuery(tableName, insertKeys, insertValues), [insertValues[0]]);
    res.sendStatus(201)
});

module.exports = router;
