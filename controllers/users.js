const User = require("../models/user");
const Characteristics = require("../models/characteristics");

//--------------------------------------------------------Gets

//Get all Users
exports.getAllUsers = async (req, res) => {
    try {
        let user = await User.findAll();
        res.status(200).send(user);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//Get Users by ID
exports.getUserByID = async (req, res) => {
  const userId = req.params.id;

    try {
        let user = await User.findByPk(userId);
        res.status(200).send(user);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }


};

//------------------------------------------------------------Posts
exports.postAddUser = (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        User.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditUser = async (req, res) => {
  const data = JSON.parse(req.body.data);
    try {
        let user = await User.findByPk(data.userID);
        await user.update(data);
        console.log("User Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteUser = async (req, res, next) => {
  const userId = req.params.id;

    try {
        let user = await User.findByPk(userId);
        await user.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
