const Message = require("../models/message");

//--------------------------------------------------------Gets

//Get all Messages
exports.getAllMessages = (req, res, next) => {
  Message.findAll()
    .then((messages) => {
      res.status(200).send(messages);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Messages by ID
exports.getMessageByID = (req, res, next) => {
  const messageId = req.params.id;
  Message.findByPk(messageId)
    .then((message) => {
      res.send(message);
    })
    .catch((err) => console.log(err));
};

//------------------------------------------------------------Posts
exports.postAddMessage = (req, res, next) => {
  Message.create({
    //todo add create message
  })
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditMessage = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  Message.findByPk(data.messageID)
    .then((message) => {
      return message.update(data);
    })
    .then((result) => {
      console.log("Message Updated");
      res.status(201).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
//------------------------------------------------------------Delete

exports.postDeleteMessage = (req, res, next) => {
  const messageId = req.params.id;
  Message.findByPk(messageId)
    .then((message) => {
      return message.destroy();
    })
    .then((result) => {
      console.log("Message Deleted");
    })
    .catch((err) => console.log(err));
};
