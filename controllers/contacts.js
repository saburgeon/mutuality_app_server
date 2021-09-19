const Contact = require("../models/contact");
const dbc = require("../config/db_constants");
const sequelize = require("../config/db-config");
const { Op } = require("sequelize");
const query = require("../config/queries");
const Note = require("../models/note");

const Tag = require("../models/tag");
const Event = require("../models/event");


//--------------------------------------------------------Gets

//Get all Contacts
exports.getAllContacts = (req, res, next) => {
  Contact.findAll()
    .then((contacts) => {
      res.send(contacts);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get Contacts by ID
exports.getContactByID = (req, res, next) => {
  const contactId = req.params.id;

  Contact.findAll({ where: { contactID: contactId } })
    .then((contact) => {
      res.send(contact);
    })
    .catch((err) => console.log(err));
};

exports.getSpecificContactData = async (req, res, next) => {
  const contactId = req.params.id;
  try {
    let _results = await Contact.findAll({
      where: { contactID: contactId },
      include: [Note, Event, Tag, ChecklistParent],
    });
    res.send(_results);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.sortByLastEvent = async (req, res, next) => {
  var sorting = req.params.sorting;

  try {
    let _results = await Contact.findAll({
      order: [["maxDate", `${sorting}`]],
    });
    res.status(201).send(_results);
  } catch (err) {
    res.status(400).send(err);
    throw err;
  }
};

//Get Last Created Contact
exports.getLastContact = (req, res, next) => {
  Contact.max(Contact.contactID)
    .then((contact) => {
      res.send(contact);
    })
    .catch((err) => console.log(err));
};

//Get Contact count
exports.getContactCount = (req, res, next) => {
  Contact.count()
    .then((count) => {
      res.send(count);
    })
    .catch((err) => console.log(err));
};

exports.filteredContacts = (req, res, next) => {
    print()
  sequelize
    .query(
      `SELECT * 
        FROM ${dbc.Contacts_Table_Name} 
        LEFT JOIN (SELECT eventContactID, 
    MAX(eventStart) AS maxDate 
    FROM Events 
    WHERE eventStart <= ${Date.now()} 
    GROUP BY eventContactID) latestEvents 
        ON ${dbc.Contact_ID} = ${dbc.Event_Contact_ID} 
        LEFT JOIN ${dbc.Tags_Table_Name} 
        ON ${dbc.Contact_ID} = ${dbc.Tags_Contact_ID} 
        WHERE ${dbc.Contact_Primary_Assignee} != 'Archive' 
        ${req.query.finalFilter.replace(/["]+/g, "")}`,
      {
        model: Contact,
        mapToModel: true, // pass true here if you have any mapped fields
      }
    )
    .then((contacts) => {
      console.log(contacts.length);
      res.send(contacts);
    })
    .catch((err) => console.log(err));
};

exports.userFilteredContacts = (req, res, next) => {
  sequelize
    .query(
      `SELECT * 
        FROM ${dbc.Contacts_Table_Name} 
        
        LEFT JOIN (SELECT eventContactID, 
    MAX(eventStart) AS maxDate 
    FROM Events 
    WHERE eventStart <= ${Date.now()} 
    GROUP BY eventContactID) latestEvents 
        ON ${dbc.Contact_ID} = ${dbc.Event_Contact_ID} 
        LEFT JOIN ${dbc.Tags_Table_Name} 
        ON ${dbc.Contact_ID} = ${dbc.Tags_Contact_ID} 
        WHERE ${dbc.Contact_Primary_Assignee} = ? 
        ${req.query.finalFilter.replace(/["]+/g, "")} ORDER BY maxDate ASC`,
      {
        replacements: [req.params.name],
        model: Contact,
        mapToModel: true, // pass true here if you have any mapped fields
      }
    )
    .then((contacts) => {
      res.send(contacts);
    })
    .catch((err) => console.log(err));
};

exports.getClosenessCount = (req, res, next) => {
  let contactID = req.params.id;
  sequelize
    .query(
      `SELECT *, 
        CASE 
        WHEN Points < 20 THEN 'Just Met' 
        WHEN Points < 40 THEN 'Acquaintances' 
        WHEN Points < 60 THEN 'Friends' 
        WHEN Points < 80 THEN 'Close Friends' 
        WHEN Points < 100 THEN 'Family' 
        WHEN Points < 120 THEN 'App Mastery' 
        END closenessEntry 
        FROM (${query.contactPoints(
          `${dbc.Contacts_Table_Name}.${dbc.Contact_ID}`
        )}) contactPoints 
        WHERE ${dbc.Contact_ID} = ?`,
      {
        replacements: [contactID],
        model: Contact,
        mapToModel: true, // pass true here if you have any mapped fields
      }
    )
    .then((count) => {
      res.send(JSON.stringify({ Points: count }));
    })
    .catch((err) => console.log(err));
};

exports.getAllBirthdays = (req, res, next) => {
  Contact.findAll({
    where: {
      contactDOB: { [Op.not]: null },
    },
  })
    .then((contacts) => {
      let listOf = [];
      let currentDate = new Date();
      let standarizedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );

      let endDate = new Date(parseInt(req.params.endDate));
      for (let i = 0; i < contacts.length; i++) {
        let dateMillis = contacts[i].contactDOB;
        let date = new Date(dateMillis);
        let date2 = new Date(
          standarizedDate.getFullYear(),
          date.getMonth(),
          date.getDate()
        );

        if (date2 < standarizedDate) {
          date2 = new Date(
            standarizedDate.getFullYear() + 1,
            date.getMonth(),
            date.getDate()
          );
        }
        if (date2 >= standarizedDate && date2 <= endDate) {
          listOf.push(contacts[i]);
        }
      }
      res.send(listOf);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getBirthdaysByUser = (req, res, next) => {
  Contact.findAll({
    where: {
      contactDOB: { [Op.not]: null },
      contactPrimaryAssignee: req.params.contactPrimaryAssignee,
    },
  })
    .then((contacts) => {
      let listOf = [];
      let currentDate = new Date();

      let standarizedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );

      let currentYear = currentDate.getFullYear();
      let endDate = new Date(parseInt(req.params.endDate));
      for (let i = 0; i < contacts.length; i++) {
        let dateMillis = contacts[i].contactDOB;
        let date = new Date(dateMillis);
        let date2 = new Date(currentYear, date.getMonth(), date.getDate());

        if (date2 < standarizedDate) {
          date2 = new Date(currentYear + 1, date.getMonth(), date.getDate());
        }
        if (date2 >= standarizedDate && date2 <= endDate) {
          listOf.push(contacts[i]);
        }
      }
      res.send(listOf);
    })
    .catch((err) => {
      console.log(err);
    });
};
//------------------------------------------------------------Posts

exports.postAddContact = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  Contact.create({
    firstName: data.firstName,
    middleName: data.middleName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    contactPrimaryAssignee: data.contactPrimaryAssignee,
  })
    .then((result) => {
      res.sendStatus(201);
      console.log("Contact Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//------------------------------------------------------------Patch
exports.patchEditContact = (req, res, next) => {
  const data = JSON.parse(req.body.data);
  Contact.findByPk(data.contactID)
    .then((contact) => {
      return contact.update(data);
    })
    .then((result) => {
      console.log("Contact Updated");
      res.send(result);
    })
    .catch((err) => console.log(err));

  //
};
//------------------------------------------------------------Delete

exports.postDeleteContact = (req, res, next) => {
  const contactId = req.params.id;
  Contact.findByPk(contactId)
    .then((contact) => {
      return contact.destroy();
    })
    .then((result) => {
      console.log("Contact Deleted");
    })
    .catch((err) => console.log(err));
};
