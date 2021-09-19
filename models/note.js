const Sequelize = require('sequelize');
const sequelize = require('../config/db-config');

const Note = sequelize.define('Notes', {

    noteID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    noteContactID: Sequelize.STRING,
    noteEntry: Sequelize.STRING,
    noteCategory: Sequelize.INTEGER,
    noteTimeStamp: Sequelize.STRING,
    noteCreator: Sequelize.STRING,
    noteTitle: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    createdAt:Sequelize.STRING,


});

module.exports = Note;