const Contact = require("../models/contact");

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
               contactCreator: data.contactCreator,
                localDatabaseID: data.localDatabaseID,
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
                localDatabaseID: data.localDatabaseID,
            }});
        await contact.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
