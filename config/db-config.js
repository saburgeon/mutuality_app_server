const {Sequelize} = require("sequelize");


const sequelize = new Sequelize("mutuality", "spurg", "sqlBoss411$", {
    dialect: 'mysql',
    storage: "./session.sqlite",
    host: '137.184.111.22',
    port: "3306",

});



module.exports = sequelize;

/*
//Importing required dependency modules
const mysql = require("mysql2");



//local mysql db connection
const dbConn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    port: process.env.SQL_DB,
});

const promiseDBConn = dbConn.promise();

module.exports = promiseDBConn;
*/
