const Characteristics = require("../models/characteristics");
const sequelize = require("../config/db-config");
const {where} = require("sequelize");
const {Op} = require("sequelize");
//--------------------------------------------------------Gets

//Get all Characteristics for user
exports.getAllCharacteristics = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let characteristics = await Characteristics.findAll(
            {
                where: {
                    characteristicCreator: data.userUID
                }
            });
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
        let characteristic = await Characteristics.findOne({
            where: {
               characteristicsID: data.characteristicsID,
                characteristicCreator: data.characteristicCreator
            }
        });
        await characteristic.update(data);
        console.log("Characteristic Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

exports.patchEditBulkCharacteristics = async (req, res) => {
    const data = JSON.parse(req.body.data);
    const extra = JSON.parse(req.body.extra);

    try {
        let test = await Characteristics.update({
            characteristicCategory: extra.newCategory
        }, {
            where: {
                characteristicCategory: data.characteristicCategory,
                characteristicCreator: data.characteristicCreator
            }
        });
        console.log(test);
        console.log("Characteristics Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Delete

exports.postDeleteCharacteristic = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let characteristic = await Characteristics.findOne({
            where: {
                characteristicsID: data.characteristicsID,
                characteristicCreator: data.characteristicCreator
            }
        });
        await characteristic.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }

};
