const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Message = sequelize.define('Messages', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    dailyMessage: Sequelize.STRING,
    creatorUID: Sequelize.STRING,
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,

});

module.exports = Message;