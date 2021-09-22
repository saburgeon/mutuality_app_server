const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const LifeEvent = sequelize.define('LifeEvents', {

    lifeEventsID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    lifeEventsDate: Sequelize.STRING,
    lifeEventsTitle: Sequelize.STRING,
    lifeEventsComment: Sequelize.STRING,
    lifeEventsCodePoint: Sequelize.INTEGER,
    lifeEventsIconFamily: Sequelize.STRING,
    lifeEventsIconPackage: Sequelize.STRING,
    lifeEventsContactID: Sequelize.INTEGER,
    lifeEventsCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,

}, {  timestamps: false});

module.exports = LifeEvent;