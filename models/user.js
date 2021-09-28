const Sequelize = require("sequelize");
const sequelize = require("../config/db-config");

const User = sequelize.define("Users", {

  userUID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  userImage: Sequelize.STRING,
  userName: Sequelize.STRING,
  userMiddleName: Sequelize.STRING,
  userLastName: Sequelize.STRING,
  userEmail: Sequelize.STRING,
  userPhone: Sequelize.STRING,
  verifyFirstUse: Sequelize.INTEGER,
  userFavoritePage: Sequelize.INTEGER,
  updatedAt: Sequelize.STRING,
  createdAt: Sequelize.STRING,
  deletedAt: Sequelize.STRING

}, {  timestamps: false});

module.exports = User;
