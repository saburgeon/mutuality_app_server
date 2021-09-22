const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Tag = sequelize.define('Tags', {

    tagsID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    tagsContactID: Sequelize.INTEGER,
    tagsEntry: Sequelize.STRING,
    creatorUID: Sequelize.STRING,
    tagsCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    localDatabaseID: Sequelize.INTEGER


}, {  timestamps: false});

module.exports = Tag;