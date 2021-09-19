const Relationship = require("../models/relationship");

//--------------------------------------------------------Gets

//Get all Relationships
exports.getAllRelationships = (req, res, next) => {
  Relationship.findAll()
    .then((relationships) => {
      res.send(relationships);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Relationships by ID
exports.getRelationshipByID = (req, res, next) => {
  const relationshipId = req.params.id;
  Relationship.findByPk(relationshipId)
    .then((relationship) => {
      console.log(relationship);
      res.send(relationship);
    })
    .catch((err) => console.log(err));
};

//------------------------------------------------------------Posts
exports.postAddRelationship = (req, res, next) => {
  Relationship.create({
    //todo add create relationship
  })
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditRelationship = (req, res, next) => {
  const relationshipId = req.params.id;
  Relationship.findByPk(relationshipId)
    .then((relationship) => {
      return relationship.save();
    })
    .then((result) => {
      console.log("Relationship Updated");
      res.send(result);
    })
    .catch((err) => console.log(err));
};
//------------------------------------------------------------Delete

exports.postDeleteRelationship = (req, res, next) => {
  const relationshipId = req.params.id;
  Relationship.findByPk(relationshipId)
    .then((relationship) => {
      return relationship.destroy();
    })
    .then((result) => {
      console.log("Relationship Deleted");
    })
    .catch((err) => console.log(err));
};
