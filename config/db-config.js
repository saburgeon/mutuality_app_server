const {Sequelize} = require("sequelize");


const sequelize = new Sequelize("mutuality_db_app", 'armandolocal', 'YR8&xE%W', {
    dialect: 'mysql',
    storage: "./session.sqlite",
    host: "localhost",
    port: "3306",

    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },});



module.exports = sequelize;

