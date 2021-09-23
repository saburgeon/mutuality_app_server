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
exports.getUserByUID = async (req, res) => {
  const UID = req.params.uid;

    try {
        let user = await User.findOne(
            {
                where: {
                    userUID: UID
                }
            });
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
        let user = await User.findOne(
            {
                where: {
                    userUID: data.userUID
                }
            });
        await user.update(data);
        console.log("User Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteUser = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        let user = await User.findOne(
            {
                where: {
                    userUID: data.userUID
                }
            });
        await user.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
