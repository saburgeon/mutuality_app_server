const Contact = require("../models/contact");
const Characteristics = require("../models/characteristics");
const Note = require("../models/note");
const LifeEvent = require("../models/life_event");
const Relationship = require("../models/relationships");
const Tag = require("../models/tag");
const Event = require("../models/event");

//--------------------------------------------------------Gets

//Get all Contacts for user
exports.getAllContacts = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let contacts = await Contact.findAll(
            {
                where: {
                    contactCreator: data.userUID
                }
            });
        res.status(200).send(contacts);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//Get Contacts by ID
exports.getContactByID = async (req, res) => {
    const contactId = req.params.id;

    try {
        let contact = await Contact.findByPk(contactId);
        res.status(200).send(contact);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Posts

exports.postAddContact = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        Contact.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditContact = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let contact = await Contact.findOne({
            where: {
                contactID: data.contactID,
               contactCreator: data.contactCreator,
            }});
        await contact.update(data);
        console.log("Contact Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteContact = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        let contact = await Contact.findOne({
            where: {
                contactCreator: data.contactCreator,
                contactID: data.contactID,
            }});
        await contact.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};


exports.postBulkDeleteContacts = async (req, res) => {
    const data = JSON.parse(req.body.data);
const timestamp = JSON.parse(req.body.timestamp);


    try {
        await Contact.update({deletedAt: timestamp}, {
            where: {
                contactID: data
            }
        });
        await Note.update({deletedAt: timestamp}, {
            where: {
                noteContactID: data
            }
        });
        await Characteristics.update({deletedAt: timestamp}, {
            where: {
                characteristicsContactID: data
            }
        });
        await Event.update({deletedAt: timestamp}, {
            where: {
                eventContactID: data
            }
        });
        await LifeEvent.update({deletedAt: timestamp}, {
            where: {
                lifeEventContactID: data
            }
        });
        await Relationship.update({deletedAt: timestamp}, {
            where: {
                relationshipContactID: data
            }
        });
        await Tag.update({deletedAt: timestamp}, {
            where: {
                tagsContactID: data
            }
        });


        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
