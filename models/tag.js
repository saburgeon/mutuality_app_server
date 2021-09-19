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
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,


});

module.exports = Tag;