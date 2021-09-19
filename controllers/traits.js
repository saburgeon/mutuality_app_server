const Trait = require("../models/trait");

//--------------------------------------------------------Gets

//Get all Traits
exports.getAllTraits = (req, res, next) => {
  Trait.findAll()
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
  Trait.findByPk(traitId)
    .then((trait) => {
      res.send(trait);
    })
    .catch((err) => console.log(err));
};

//------------------------------------------------------------Posts
exports.postAddTrait = (req, res, next) => {
  Trait.create({
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
  Trait.findByPk(traitId)
    .then((trait) => {
      return trait.save();
    })
    .then((result) => {
      console.log("Trait Updated");
      res.send(result);
    })
    .catch((err) => console.log(err));
};
//------------------------------------------------------------Delete

exports.postDeleteTrait = (req, res, next) => {
  const traitId = req.params.id;
  Trait.findByPk(traitId)
    .then((trait) => {
      return trait.destroy();
    })
    .then((result) => {
      console.log("Trait Deleted");
    })
    .catch((err) => console.log(err));
};
