const Tag = require("../models/tag");

//--------------------------------------------------------Gets

//Get all Tags
exports.getAllTags = (req, res, next) => {
  Tag.findAll()
    .then((tags) => {
      res.send(tags);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Tags by ID
exports.getTagByID = (req, res, next) => {
  const tagId = req.params.id;
  Tag.findByPk(tagId)
    .then((tag) => {
      console.log(tag);
      res.send(tag);
    })
    .catch((err) => console.log(err));
};

//Get Tags by contact ID
exports.getContactTags = (req, res, next) => {
  Tag.findAll({
    where: { tagsContactID: req.params.id },
  })
    .then((tag) => {
      res.send(tag);
    })
    .catch((err) => console.log(err));
};

//------------------------------------------------------------Posts
exports.postAddTag = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  console.log(data);
  Tag.create({
    tagsContactID: data.tagsContactID,
    tagsEntry: data.tagsEntry,
  })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditTag = (req, res, next) => {
  const data = JSON.parse(req.body.data);

  Tag.findByPk(data.tagsID)
    .then((tag) => {
      return tag.update(data);
    })
    .then((result) => {
      console.log("Tag Updated");
      res.send(result);
    })
    .catch((err) => console.log(err));
};
//------------------------------------------------------------Delete

exports.postDeleteTag = (req, res, next) => {
  const tagId = req.params.id;
  Tag.findByPk(tagId)
    .then((tag) => {
      return tag.destroy();
    })
    .then((result) => {
      console.log("Tag Deleted");
    })
    .catch((err) => console.log(err));
};
