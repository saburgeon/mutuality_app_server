const User = require("../models/user");

//--------------------------------------------------------Gets

//Get all Users
exports.getAllUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Users by ID
exports.getUserByID = (req, res, next) => {
  const userId = req.params.id;
  try{
     let  user =  User.findByPk(userId);
      console.log(user);
      res.send(user);
  } catch(e){ console.log(e)}


};

//------------------------------------------------------------Posts
exports.postAddUser = (req, res, next) => {
    const data = JSON.parse(req.body.data);
  User.create(data)
    .then((result) => {
        res.status(201).send(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditUser = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  console.log(data);
  User.findByPk(data.userID)
    .then((user) => {
      return user.update(data);
    })
    .then((result) => {
      console.log("User Updated");
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
};
//------------------------------------------------------------Delete

exports.postDeleteUser = (req, res, next) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      return user.destroy();
    })
    .then((result) => {
      console.log("User Deleted");
    })
    .catch((err) => console.log(err));
};
