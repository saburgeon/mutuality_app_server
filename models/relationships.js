const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Relationship = sequelize.define('Relationships', {

    relationshipID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

   type: Sequelize.STRING,
    relationshipName: Sequelize.STRING,
    relationshipContactID: Sequelize.INTEGER,
    relationshipNotes: Sequelize.STRING,
    relationshipImage: Sequelize.STRING,
    relationshipCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    localDatabaseID: Sequelize.INTEGER


}, {  timestamps: false});

module.exports = Relationship;