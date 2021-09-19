const Characteristics = require("../models/characteristics");

//--------------------------------------------------------Gets

//Get all Traits
exports.getAllTraits = (req, res, next) => {
  Characteristics.findAll()
    .then((traits) => {
      res.send(traits);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Traits by ID
exports.getTraitByID = (req, res, next) => {
  const traitId = req.params.id;
  Characteristics.findByPk(traitId)
    .then((trait) => {
      res.send(trait);
    })
    .catch((err) => console.log(err));
};

//------------------------------------------------------------Posts
exports.postAddTrait = (req, res, next) => {
  Characteristics.create({
    //todo add create trait
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditTrait = (req, res, next) => {
  const traitId = req.params.id;
  Characteristics.findByPk(traitId)
    .then((trait) => {
      return trait.save();
    })
    .then((result) => {
      console.log("Characteristics Updated");
      res.send(result);
    })
    .catch((err) => console.log(err));
};
//------------------------------------------------------------Delete

exports.postDeleteTrait = (req, res, next) => {
  const traitId = req.params.id;
  Characteristics.findByPk(traitId)
    .then((trait) => {
      return trait.destroy();
    })
    .then((result) => {
      console.log("Characteristics Deleted");
    })
    .catch((err) => console.log(err));
};
