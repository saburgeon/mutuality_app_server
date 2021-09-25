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

    tagsCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,



}, {  timestamps: false});

module.exports = Tag;