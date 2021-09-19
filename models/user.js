const Sequelize = require("sequelize");
const sequelize = require("../config/db-config");

const User = sequelize.define("Users", {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
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
  userUID: Sequelize.STRING,
  updatedAt: Sequelize.TEXT,
  createdAt: Sequelize.TEXT,


});

module.exports = User;
