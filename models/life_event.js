const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const LifeEvent = sequelize.define('LifeEvents', {

    lifeEventsID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    lifeEventDate: Sequelize.STRING,
    lifeEventTitle: Sequelize.STRING,
    lifeEventComment: Sequelize.STRING,
    lifeEventCodePoint: Sequelize.INTEGER,
    lifeEventIconFamily: Sequelize.STRING,
    lifeEventIconPackage: Sequelize.STRING,
    lifeEventContactID: Sequelize.INTEGER,
    lifeEventsCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    localDatabaseID: Sequelize.INTEGER

}, {  timestamps: false});

module.exports = LifeEvent;