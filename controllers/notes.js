const Note = require("../models/note");
const Contact = require("../models/contact");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

//--------------------------------------------------------Gets

//Get all Notes
exports.getAllNotes = (req, res, next) => {
  Note.findAll()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get Notes by ID
exports.getNoteByID = (req, res, next) => {
  const noteId = req.params.id;
  Note.findByPk(noteId)
    .then((note) => {
      res.send(note);
    })
    .catch((err) => console.log(err));
};

//Get Home Page Favorite Notes
exports.getHomePageNotes = (req, res, next) => {
  Note.findAll({ where: { noteIconSet: 1 }, include: [Contact] })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get all Notes
exports.getAllContactNotes = (req, res, next) => {
  Note.findAll({
    where: { noteContactID: req.params.id, noteIconSet: { [Op.not]: 6 } },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get Favorites notes
exports.getFavoriteNotes = (req, res, next) => {
  const contactId = req.params.id;
  Note.findAll({
    where: { noteIconSet: 1, noteContactID: contactId },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get important notes
exports.getImportantNotes = (req, res, next) => {
  const contactId = req.params.id;
  Note.findAll({
    where: { noteIconSet: 2, noteContactID: contactId },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get It Matters notes
exports.getItMattersNotes = (req, res, next) => {
  const contactId = req.params.id;
  Note.findAll({
    where: { noteIconSet: 3, noteContactID: contactId },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Good To Know notes
exports.getGoodToKnowNotes = (req, res, next) => {
  const contactId = req.params.id;
  Note.findAll({
    where: { noteIconSet: 4, noteContactID: contactId },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get Not Sure notes
exports.getNotSureNotes = (req, res, next) => {
  const contactId = req.params.id;
  Note.findAll({
    where: { noteIconSet: 5, noteContactID: contactId },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get Archived notes
exports.getArchivedNotes = (req, res, next) => {
  const contactId = req.params.id;
  Note.findAll({
    where: { noteIconSet: 6, noteContactID: contactId },
    order: [["noteDate", "ASC"]],
    include: [Contact],
  })
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      console.log(err);
    });
};
//------------------------------------------------------------Posts
exports.postAddNote = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  Note.create(data)
    .then((result) => {
      res.status(201).send(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditNote = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  Note.findByPk(data.noteID)
    .then((note) => {
      return note.update(data);
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
//------------------------------------------------------------Delete

exports.postDeleteNote = (req, res, next) => {
  const noteId = req.params.id;
  Note.findByPk(noteId)
    .then((note) => {
      return note.destroy();
    })
    .then((result) => {
      console.log("Note Deleted");
    })
    .catch((err) => console.log(err));
};
