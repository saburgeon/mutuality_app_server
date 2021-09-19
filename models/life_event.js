const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const LifeEvent = sequelize.define('LifeEvents', {

    lifeEventID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    lifeEventDate: Sequelize.INTEGER,
    lifeEventTitle: Sequelize.STRING,
    lifeEventComment: Sequelize.STRING,
    lifeEventCodePoint: Sequelize.INTEGER,
    lifeEventIconFamily: Sequelize.STRING,
    lifeEventIconPackage: Sequelize.STRING,
    lifeEventContactID: Sequelize.INTEGER,
    creatorUID: Sequelize.STRING,
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,

});

module.exports = LifeEvent;