const Event = require("../models/event");
const Contact = require("../models/contact");
const { Op } = require("sequelize");

//--------------------------------------------------------Gets

//Get all Events
exports.getAllEvents = (req, res, next) => {
  Event.findAll({
    where: {
      eventType: {
        [Op.or]: ["Text", "Email", "Call", "In-Person"],
      },
    },
    include: [Contact],
  })
    .then((events) => {
      res.send(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get all Events by Contact
exports.getAllContactEvents = (req, res, next) => {
  Event.findAll({
    where: {
      eventContactID: req.params.contactID,
      [Op.not]: { eventType: ["createdEntry", "editMade", "firstMeet"] },
    },
    include: [Contact],
  })
    .then((events) => {
      res.send(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get an Event by ID
exports.getEventByID = (req, res, next) => {
  Event.findByPk(req.params.id)
    .then((event) => {
      res.send(event);
    })
    .catch((err) => console.log(err));
};

//Get all Events for the user
exports.getAllUserEvents = (req, res, next) => {
  console.log();
  Event.findAll({
    where: {
      "$Contact.contactPrimaryAssignee$": req.params.primaryUser,
      [Op.and]: {
        eventType: {
          [Op.or]: ["Text", "Email", "Call", "In-Person"],
        },
      },
    },
    include: [Contact],
  })
    .then((events) => {
      res.status(200).send(events);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Check if there's any existing events, so that one can be added if not (Usually when a user is created).
//This goes with the reconnect functions, as they need an event to work properly.

exports.checkIfEventsExists = (req, res, next) => {
  Event.count({ where: { eventContactID: req.params.id } })
    .then((event) => {
      res.send(JSON.stringify({ count: event }));
    })
    .catch((err) => console.log(err));
};

// Check when was the last occurring event before NOW
exports.getLastEventBeforeNow = (req, res, next) => {
  const contactID = req.params.eventContactID;
  Event.max("eventStart", {
    where: {
      eventStart: { [Op.lte]: Date.now() },
      eventContactID: contactID,
    },
  })
    .then((event) => {
      const results = JSON.stringify({ eventStart: event });
      res.send(results);
    })
    .catch((err) => console.log(err));
};

//------------------------------------------------------------Posts
exports.postAddEvent = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  Event.create(data)
    .then((result) => {
      res.status(201).send(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditEvent = (req, res, next) => {
  const data = JSON.parse(req.body.data);

  Event.findByPk(data.eventID)
    .then((event) => {
      return event.update(data);
    })
    .then((event) => {
      console.log("Event Updated");
      res.status(200).send(event);
    })
    .catch((err) => console.log(err));
};
//------------------------------------------------------------Delete

exports.postDeleteEvent = (req, res, next) => {
  const eventId = req.params.id;
  Event.findByPk(eventId)
    .then((event) => {
      return event.destroy();
    })
    .then((result) => {
      res.sendStatus(200);
      console.log("Event Deleted");
    })
    .catch((err) => console.log(err));
};
