const Note = require("../models/note");
//--------------------------------------------------------Gets


exports.getAllNotes = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let notes = await Note.findAll(
            {
                where: {
                    noteCreator: data.userUID
                }
            });
        res.status(200).send(notes);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//Get Notes by ID
exports.getNoteByID = async (req, res) => {
    const noteId = req.params.id;
    try {
        let note = await Note.findByPk(noteId);
        res.status(200).send(note);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Posts

exports.postAddNote = (req, res) => {
    const data = JSON.parse(req.body.data);

    try {
        Note.create(data);
        res.sendStatus(200)
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};

//------------------------------------------------------------Patch
exports.patchEditNote = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let note = await Note.findOne(
            {
                where: {
                    localDatabaseID: data.localDatabaseID,
                    noteCreator: data.noteCreator
                }
            });
        await note.update(data);
        console.log("Note Updated");
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
//------------------------------------------------------------Delete

exports.postDeleteNote = async (req, res) => {
    const data = JSON.parse(req.body.data);
    try {
        let note = await Note.findOne(
            {
                where: {
                    localDatabaseID: data.localDatabaseID,
                    noteCreator: data.noteCreator
                }
            });
        await note.destroy();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(404)
        console.log(e)
    }
};
