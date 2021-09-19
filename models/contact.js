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
    profession: Sequelize.STRING,
    town: Sequelize.STRING,
    country: Sequelize.STRING,
    phone: Sequelize.STRING,
    secondaryPhone: Sequelize.STRING,
    thirdPhone: Sequelize.STRING,
    email: Sequelize.STRING,
    secondEmail: Sequelize.STRING,
    address: Sequelize.STRING,
    secondAddress: Sequelize.STRING,
    favoriteFood: Sequelize.STRING,
    favoriteColor: Sequelize.BIGINT,
    favoriteDrink: Sequelize.STRING,
    favoriteCountry: Sequelize.STRING,
    favoriteHobby: Sequelize.STRING,
    religiousView: Sequelize.STRING,
    contactImage: Sequelize.STRING,
    contactDOB: Sequelize.BIGINT,
    favorite: Sequelize.INTEGER,
    reconnectTimeFrame: Sequelize.BIGINT,
    reconnectDate: Sequelize.BIGINT,
    closeness: Sequelize.STRING,
    googleRawAddress: Sequelize.STRING,
    ethnicity: Sequelize.STRING,
    creatorUID: Sequelize.STRING,
    contactPrimaryAssignee: Sequelize.STRING,
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
    website: Sequelize.STRING,
    secondWebsite: Sequelize.STRING,
    createdAt: Sequelize.STRING,
    updatedAt: Sequelize.STRING
});

module.exports = Contact;