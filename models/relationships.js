const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Relationship = sequelize.define('Relationships', {

    relationshipID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

   relationshipType: Sequelize.STRING,
    relationshipName: Sequelize.STRING,
    relationshipContactID: Sequelize.INTEGER,
    relationshipNotes: Sequelize.STRING,
    relationshipImage: Sequelize.STRING,
    creatorUID: Sequelize.STRING,
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,


});

module.exports = Relationship;