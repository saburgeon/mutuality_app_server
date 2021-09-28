const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Statistics = sequelize.define('Statistics', {

    statisticID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },

    statisticContactID: Sequelize.STRING,
    statisticParentTable: Sequelize.STRING,
    statisticParentColumn: Sequelize.STRING,
    statisticParentID: Sequelize.STRING,
    statisticCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    deletedAt: Sequelize.STRING

}, {  timestamps: false});

module.exports = Statistics;