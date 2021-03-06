const LifeEvent = require('../models/life_event');
//--------------------------------------------------------Gets

//Get all LifeEvents
exports.getAllLifeEvents = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let lifeEvents = await LifeEvent.findAll(
            {
                where: {
                    lifeEventsCreator: data.userUID
                }
            }
        );
        res.status(200).send(lifeEvents);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
}


//Get LifeEvents by event ID
exports.getLifeEventByID = async (req, res) => {
    const lifeEventId = req.params.id;

    try {
        let lifeEvents = await LifeEvent.findByPk(lifeEventId);
        res.status(200).send(lifeEvents);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Posts
exports.postAddLifeEvent = (req, res) => {
    const data = JSON.parse(req.body.data);
    console.log(data);
    try {
        LifeEvent.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
}

//------------------------------------------------------------Patch
exports.patchEditLifeEvent = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let lifeEvent = await LifeEvent.findOne(
            {
                where: {
                    lifeEventsID: data.lifeEventsID,
                    lifeEventsCreator: data.lifeEventsCreator
                }
            });
        await lifeEvent.update(data);
        console.log("Life Event Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }


}
//------------------------------------------------------------Delete

exports.postDeleteLifeEvent = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let lifeEvent = await LifeEvent.findOne(
            {
                where: {
                    lifeEventsID: data.lifeEventsID,
                    lifeEventsCreator: data.lifeEventsCreator
                }
            });
        await lifeEvent.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
}
