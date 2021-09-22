const Sequelize = require('sequelize');

const sequelize = require('../config/db-config');

const Contact = sequelize.define('Contacts', {

contactID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
},

    firstName: Sequelize.STRING,
    middleName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    contactImage: Sequelize.STRING,
    profession: Sequelize.STRING,
    town: Sequelize.STRING,
    country: Sequelize.STRING,
    contactDOB: Sequelize.STRING,
    favorite: Sequelize.INTEGER,
    primaryPhone: Sequelize.STRING,
    primaryPhoneCountryCode: Sequelize.STRING,
    secondaryPhone: Sequelize.STRING,
    secondaryPhoneCountryCode: Sequelize.STRING,
    primaryEmail: Sequelize.STRING,
    secondaryEmail: Sequelize.STRING,
    primaryAddress: Sequelize.STRING,
    googleRawPrimaryAddress: Sequelize.STRING,
    secondaryAddress: Sequelize.STRING,
    googleRawSecondaryAddress: Sequelize.STRING,
    primaryWebsite: Sequelize.STRING,
    secondaryWebsite: Sequelize.STRING,

    ethnicity: Sequelize.STRING,
    favoriteFood: Sequelize.STRING,
    favoriteColor: Sequelize.BIGINT,
    favoriteDrink: Sequelize.STRING,
    favoriteCountry: Sequelize.STRING,
    favoriteHobby: Sequelize.STRING,
    religiousView: Sequelize.STRING,
    reconnectTimeFrame: Sequelize.STRING,
    reconnectDate: Sequelize.STRING,
    closeness:Sequelize.STRING,
    themed: Sequelize.INTEGER,
    createdAt: Sequelize.STRING,
    updatedAt: Sequelize.STRING,
    contactCreator: Sequelize.STRING,

    twitter: Sequelize.STRING,
    instagram: Sequelize.STRING,
    linkedIn: Sequelize.STRING,
    facebook: Sequelize.STRING,
    youTube: Sequelize.STRING,
    pinterest: Sequelize.STRING,
    yelp: Sequelize.STRING,
    fourSquare: Sequelize.STRING,
    tikTok: Sequelize.STRING,
    tumblr: Sequelize.STRING,
    reddit: Sequelize.STRING,
    snapchat: Sequelize.STRING,
    medium: Sequelize.STRING,
    twitch: Sequelize.STRING,
    localDatabaseID: Sequelize.INTEGER


}, {  timestamps: false});

module.exports = Contact;