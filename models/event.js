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
    eventComment: Sequelize.STRING,
    eventContactID: Sequelize.INTEGER,
    allDayEvent: Sequelize.INTEGER,
    eventType: Sequelize.STRING,
    eventStart: Sequelize.BIGINT,
    eventEnd: Sequelize.BIGINT,
    eventLocationName: Sequelize.STRING,
    eventAddress: Sequelize.STRING,
    eventRawAddress: Sequelize.STRING,
    eventCreatorUID: Sequelize.STRING,
    recurrenceRule: Sequelize.STRING,
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,
});

module.exports = Event;