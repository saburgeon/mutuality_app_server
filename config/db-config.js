//const {Sequelize} = require("sequelize");
const {Sequelize} = require('sequelize-cockroachdb');

// const sequelize = new Sequelize("mutuality_db_app", 'armandolocal', 'YR8&xE%W', {
//     dialect: 'mysql',
//     storage: "./session.sqlite",
//     host: "localhost",
//     port: "3306",
//
//     dialectOptions: {
//         socketPath: "/var/run/mysqld/mysqld.sock"
//     },});






const sequelize = new Sequelize(process.env.full_url, {
    dialectOptions: {cockroachdbTelemetryDisabled : true},
    logging: console.log})


// const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
//     dialect: 'postgres',
//     host: process.env.HOST,
//     port: process.env.PORT,
//
//
//         dialectOptions: {options:{ encrypt: true}}
//     ,});

module.exports = sequelize;





