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
    noteComment: Sequelize.STRING,
    noteDate: Sequelize.BIGINT,
    noteIconSet: Sequelize.INTEGER,
    noteImageOne: Sequelize.STRING,
    noteImageTwo: Sequelize.STRING,
    noteImageThree: Sequelize.STRING,
    noteImageFour: Sequelize.STRING,
    noteImageFive: Sequelize.STRING,
    noteCreatorUID: Sequelize.STRING,
    noteEdits: Sequelize.STRING,
    noteTitle: Sequelize.STRING,
    updatedAt: Sequelize.DATE,
    createdAt:Sequelize.DATE,




});

module.exports = Note;