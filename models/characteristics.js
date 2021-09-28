const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Characteristics = sequelize.define('Characteristics', {

    characteristicsID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },

    characteristicsContactID: Sequelize.STRING,
    characteristicCategory: Sequelize.STRING,
    characteristicsTitle: Sequelize.STRING,
    characteristicsNotes:Sequelize.STRING,
    characteristicCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    deletedAt: Sequelize.STRING

}, {  timestamps: false});

module.exports = Characteristics;