const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Tag = sequelize.define('Tags', {

    tagsID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },

    tagsContactID: Sequelize.STRING,
    tagsEntry: Sequelize.STRING,

    tagsCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    deletedAt: Sequelize.STRING


}, {  timestamps: false});

module.exports = Tag;