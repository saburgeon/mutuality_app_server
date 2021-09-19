const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Trait = sequelize.define('Traits', {

    traitID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    traitContactID: Sequelize.INTEGER,
    traitCategory: Sequelize.STRING,
    traitEntry: Sequelize.STRING,
    traitComment:Sequelize.STRING,
    creatorUID: Sequelize.STRING,
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,

});

module.exports = Trait;