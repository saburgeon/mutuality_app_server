const Sequelize = require('sequelize');

const sequelize = require('../config/db-config');

const Event = sequelize.define('Events', {

    eventID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    eventTitle: Sequelize.STRING,
    eventNotes: Sequelize.STRING,
    eventContactID: Sequelize.INTEGER,
    allDayEvent: Sequelize.INTEGER,
    eventType: Sequelize.STRING,
    eventStart: Sequelize.STRING,
    eventEnd: Sequelize.STRING,
    eventLocationName: Sequelize.STRING,
    eventAddress: Sequelize.STRING,
    eventRawAddress: Sequelize.STRING,
    eventCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
}, {  timestamps: false});

module.exports = Event;