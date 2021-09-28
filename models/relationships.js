const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Relationship = sequelize.define('Relationships', {

    relationshipID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },

   type: Sequelize.STRING,
    relationshipName: Sequelize.STRING,
    relationshipContactID: Sequelize.STRING,
    relationshipNotes: Sequelize.STRING,
    relationshipImage: Sequelize.STRING,
    relationshipCreator: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,
    deletedAt: Sequelize.STRING


}, {  timestamps: false});

module.exports = Relationship;