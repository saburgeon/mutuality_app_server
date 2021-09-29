const Event = require("../models/event");


//--------------------------------------------------------Gets

//Get all Events for user
exports.getAllEvents = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let events = await Event.findAll(
            {
                where: {
                    eventCreator: data.userUID
                }
            }
        );
        res.status(200).send(events);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//Get an Event by ID
exports.getEventByID = async (req, res) => {
    const eventID = req.params.id;
    try {
        let event = await Event.findByPk(eventID);
        res.status(200).send(event);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Posts

exports.postAddEvent = (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        Event.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditEvent = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let event = await Event.findOne(
            {
                where: {
                    eventID: data.eventID,
                    eventCreator: data.eventCreator
                }
            });
        await event.update(data);
        console.log("Event Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteEvent = async (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        let event = await Event.findOne(
            {
                where: {
                    eventID: data.eventID,
                    eventCreator: data.eventCreator
                }
            });
        await event.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }

};
