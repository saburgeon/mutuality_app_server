const Relationship = require("../models/relationships");

//--------------------------------------------------------Gets

//Get all Relationships for user
exports.getAllRelationships = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let relationships = await Relationship.findAll(
            {
                where: {
                    relationshipCreator: data.userUID
                }
            });
        res.status(200).send(relationships);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//Get Relationships by ID
exports.getRelationshipByID =async  (req, res) => {
  const relationshipId = req.params.id;
    try {
        let relationship = await Relationship.findByPk(relationshipId);
        res.status(200).send(relationship);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Posts
exports.postAddRelationship = (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        Relationship.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditRelationship = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let relationship = await Relationship.findOne({
            where: {
               relationshipID: data.relationshipID,
                relationshipCreator: data.relationshipCreator
            }});
        await relationship.update(data);
        console.log("Relationship Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteRelationship = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        let relationship = await Relationship.findOne({
            where: {
                relationshipID: data.relationshipID,
                relationshipCreator: data.relationshipCreator
            }});
        await relationship.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }

};
