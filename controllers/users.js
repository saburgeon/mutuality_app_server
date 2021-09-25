const User = require("../models/user");
const Characteristics = require("../models/characteristics");
const Contact = require("../models/contact");
const Note = require("../models/note");
const Tag = require("../models/tag");
const Relationship = require("../models/relationships");
const LifeEvent = require("../models/life_event");
const Events = require("../models/event")
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

exports.getAllUserData = async (req, res) => {
    const UID = req.params.uid;
    console.log(req.params);
    try {
        let user = await User.findOne(
            {
                where: {
                    userUID: UID
                },
                include:
                    [{
                        model: Contact,
                        attributes: {
                            include: [['contactID', 'serverID']],
                            exclude: ['contactID']
                        },

                    }, {
                        model: Note,
                        attributes: {
                            include: [['noteID', 'serverID']],
                            exclude: ['noteID']
                        }
                    },
                        {
                            model: LifeEvent,
                            attributes: {
                                include: [['lifeEventsID',  'serverID']],
                                exclude: ['lifeEventsID']
                            }
                        }, {
                        model: Relationship,
                        attributes: {
                            include: [['relationshipID',  'serverID']],
                            exclude: ['relationshipID']
                        }
                    },
                        {
                            model: Tag,
                            attributes: {
                                include: [['tagsID', 'serverID']],
                                exclude: ['tagsID']
                            }
                        }, {
                        model: Events,
                        attributes: {
                            include: [['eventID',  'serverID']],
                            exclude: ['eventID']
                        }
                    }, {
                        model: Characteristics,
                        attributes: {
                            include: [['characteristicsID',  'serverID']],
                            exclude: ['characteristicsID']
                        }
                    }]


            });
        res.status(200).send(user);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }

}


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
