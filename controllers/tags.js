const Tag = require("../models/tag");
const Characteristics = require("../models/characteristics");

//--------------------------------------------------------Gets

//Get all Tags for user
exports.getAllTags = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let tags = await Tag.findAll(
            {
                where: {
                    tagCreator: data.userUID
                }
            });
        res.status(200).send(tags);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//Get Tags by ID
exports.getTagByID = async (req, res) => {
    const tagId = req.params.id;
    try {
        let tag = await Tag.findByPk(tagId);
        res.status(200).send(tag);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};


//------------------------------------------------------------Posts
exports.postAddTag = (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        Tag.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditTag = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        let tag = await Tag.findOne(
            {
                where: {
                tagID: data.tagID,
                    tagCreator: data.tagCreator
                }
            });
        await tag.update(data);
        console.log("Tag Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteTag = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        let tag = await Tag.findOne(
            {
                where: {
                    tagID: data.tagID,
                    tagCreator: data.tagCreator
                }
            });
        await tag.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
