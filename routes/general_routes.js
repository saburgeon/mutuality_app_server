const express = require('express');
const query = require("../config/queries");
const db = require("../config/db-config");
const router = express.Router();
const dbc = require('../config/db_constants');


//-----------------------------------Gets


router.delete("/delete", async (req, res) => {
    //variable that change
    const tableName = req.body.tableName;
    const columnName = req.body.columnName;
    const idList = JSON.parse(req.body.idList);
    let sql = db.format(query.deleteQuery(tableName, columnName, idList))
    let [rows, fields] = await db.query(sql)
    res.sendStatus(201)
});

module.exports = router;