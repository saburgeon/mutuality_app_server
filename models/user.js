const Sequelize = require("sequelize");
const sequelize = require("../config/db-config");

const User = sequelize.define("Users", {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  verifyFirstUse: Sequelize.INTEGER,
  userName: Sequelize.STRING,
  userMiddleName: Sequelize.STRING,
  userLastName: Sequelize.STRING,
  userImage: Sequelize.STRING,
  userPhone: Sequelize.STRING,
  userFavoritePage: Sequelize.INTEGER,
  userEmail: Sequelize.STRING,
  userUID: Sequelize.STRING,
  updatedAt: Sequelize.TEXT,
  createdAt: Sequelize.TEXT,
});

module.exports = User;
