const Characteristics = require("../models/characteristics");

//--------------------------------------------------------Gets

//Get all Characteristics
exports.getAllCharacteristics = async (req, res) => {
    try {
        let characteristics = await Characteristics.findAll();
        res.status(200).send(characteristics);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//Get Characteristic by ID
exports.getCharacteristicsByID = async (req, res) => {
    const characteristicID = req.params.id;
    try {
        let characteristic = await Characteristics.findByPk(characteristicID);
        res.status(200).send(characteristic);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Posts
exports.postAddCharacteristics = (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        Characteristics.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditCharacteristic = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let characteristic = await Characteristics.findByPk(data.characteristicsID);
        await characteristic.update(data);
        console.log("Characteristic Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteCharacteristic = async (req, res) => {
    const characteristicId = req.params.id;
    try {
        let characteristic = await Characteristics.findByPk(characteristicId);
        await characteristic.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }

};
