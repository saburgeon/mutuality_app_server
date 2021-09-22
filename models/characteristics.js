const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Characteristics = sequelize.define('Characteristics', {

    characteristicsID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    characteristicsContactID: Sequelize.INTEGER,
    characteristicCategory: Sequelize.STRING,
    characteristicsTitle: Sequelize.STRING,
    characteristicsNotes:Sequelize.STRING,
    characteristicCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    localDatabaseID: Sequelize.INTEGER

}, {  timestamps: false});

module.exports = Characteristics;