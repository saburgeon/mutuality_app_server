const LifeEvent = require('../models/life_event');
const Contact = require("../models/contact");
const {Op} = require("sequelize");

//--------------------------------------------------------Gets

//Get all LifeEvents
exports.getAllLifeEventsYears = (req, res, next) => {
    LifeEvent.findAll({
        attributes: ['lifeEventDate'],
        order: [['lifeEventDate', 'DESC']], group: 'lifeEventDate',
    }).then(lifeEvents => {
        res.send(lifeEvents);
    }).catch(err => {
        console.log(err);
    });
}

    exports.getAllLifeEventsEvents = (req, res, next) => {
    LifeEvent.findAll({
        where: {
            lifeEventDate: {[Op.gte]: req.params.yearStart},
            lifeEventDate: {[Op.lt]: req.params.yearEnd}},
        order: [['lifeEventDate', 'DESC']],
        include: [Contact]
    }).then(lifeEvents => {
        res.send(lifeEvents);
    }).catch(err => {
        console.log(err);
    });
}

//Get LifeEvents by event ID
exports.getLifeEventByID = (req, res, next) => {
    const lifeEventId = req.params.id;
    LifeEvent.findByPk(lifeEventId).then(lifeEvent => {
        console.log(lifeEvent);
        res.send(lifeEvent);
    }).catch(err => console.log(err));
};

//Get life events years by contact ID
exports.getContactLifeEventsYears = (req, res, next) => {
    const contactID = req.params.id;
    LifeEvent.findAll({
        where: {lifeEventContactID: contactID},
        attributes: ['lifeEventDate'],
        order: [['lifeEventDate', 'DESC']], group: 'lifeEventDate',
        include: [Contact]
    }).then(lifeEvents => {
        res.send(lifeEvents);
    }).catch(err => {
        console.log(err);
    });
}

//Get life events by contactID
exports.getContactLifeEventsEvents = (req, res, next) => {
    LifeEvent.findAll({
        where: {
            lifeEventContactID: req.params.id,
            lifeEventDate: {[Op.gte]: req.params.yearStart, [Op.lt]: req.params.yearEnd},

            },
        order: [['lifeEventDate', 'DESC']],
        include: [Contact]
    }).then(lifeEvents => {
        res.send(lifeEvents);
    }).catch(err => {
        console.log(err);
    });
}

//------------------------------------------------------------Posts
exports.postAddLifeEvent = (req, res, next) => {
    const data = JSON.parse(req.body.data);
    LifeEvent.create({
        lifeEventDate: data.lifeEventDate,
        lifeEventTitle:  data.lifeEventTitle,
        lifeEventComment:  data.lifeEventComment,
        lifeEventCodePoint:  data.lifeEventCodePoint,
        lifeEventIconFamily:  data.lifeEventIconFamily,
        LifeEventIconPackage:  data.lifeEventIconPackage,
        lifeEventContactID:  data.lifeEventContactID,
        creatorUID:  data.creatorUID,
    }).then(result => {
      res.sendStatus(201)
    }).catch(err => {
        console.log(err);
    })
}

//------------------------------------------------------------Patch
exports.patchEditLifeEvent = (req, res, next)=> {
    const data = JSON.parse(req.body.data);
    LifeEvent.findByPk(data.lifeEventID
    ).then(lifeEvent => {
        lifeEvent.lifeEventDate= data.lifeEventDate,
            lifeEvent.lifeEventTitle=  data.lifeEventTitle,
            lifeEvent.lifeEventComment=  data.lifeEventComment,
            lifeEvent.lifeEventCodePoint=  data.lifeEventCodePoint,
            lifeEvent.lifeEventIconFamily=  data.lifeEventIconFamily,
            lifeEvent.lifeEventIconPackage=  data.lifeEventIconPackage
        return lifeEvent.save();
    }).then(result => {
        console.log('LifeEvent Updated');
      res.sendStatus(200)
    }).catch(err => console.log(err));


}
//------------------------------------------------------------Delete

exports.postDeleteLifeEvent = (req, res, next) => {
    const lifeEventId = req.params.id;
    LifeEvent.findByPk(lifeEventId).then(lifeEvent => {
        return lifeEvent.destroy();
    }).then(result => {
        console.log('LifeEvent Deleted');
    }).catch(err => console.log(err));
}
