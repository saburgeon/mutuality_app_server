const {Sequelize} = require("sequelize");


const sequelize = new Sequelize("mutuality_db_app", 'armando', 'YR8&xE%W', {
    dialect: 'mysql',
    storage: "./session.sqlite",
    host: "147.182.130.83",
    port: "3306",

});



module.exports = sequelize;

