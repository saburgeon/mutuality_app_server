const Contact = require("../models/contact");
const dbc = require("../config/db_constants");
const sequelize = require("../config/db-config");

//--------------------------------------------------------Gets

//Get all Reconnects
exports.getAllReconnects = (req, res, next) => {
  let actualDate = new Date();
  let endOfDayDate = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate(),
    23,
    59,
    59
  );
  sequelize
    .query(
      `SELECT DISTINCT 
    maxDate, 
    ${dbc.Contacts_Table_Name}.${dbc.Contact_ID}, 
    ${dbc.Contact_First_Name}, 
    ${dbc.Contact_Last_Name}, 
    ${dbc.Contact_Phone}, 
    ${dbc.Contact_Email}, 
    ${dbc.Contact_Address}, 
    ${dbc.Contact_Reconnect_Time}, 
    ${dbc.Contact_Reconnect_Time_Date}, 
    ((${endOfDayDate.getTime()} - maxDate) - ${
        dbc.Contact_Reconnect_Time
      }) * -1 AS connectTime 
    FROM (SELECT eventContactID, 
    MAX(eventStart) AS maxDate 
    FROM Events 
    WHERE eventStart <= ${Date.now()} 
    GROUP BY eventContactID) Latest 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON Latest.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${
        dbc.Contact_ID
      }
           WHERE ${dbc.Contact_Reconnect_Time} IS NOT NULL
        OR ${dbc.Contact_Reconnect_Time} > 0
                     ORDER BY connectTime DESC`,
      {
        model: Contact,
        mapToModel: true, // pass true here if you have any mapped fields
      }
    )
    .then((reconnects) => {
      res.send(reconnects);
    })
    .catch((err) => console.log(err));
};

//Get User reconnects
exports.getUserReconnects = (req, res, next) => {
  let userName = req.params.name;
  let actualDate = new Date();
  let endOfDayDate = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate(),
    23,
    59,
    59
  );

  sequelize
    .query(
      `SELECT DISTINCT 
    maxDate, 
    ${dbc.Contacts_Table_Name}.${dbc.Contact_ID}, 
    ${dbc.Contact_First_Name}, 
    ${dbc.Contact_Last_Name}, 
    ${dbc.Contact_Phone}, 
    ${dbc.Contact_Email}, 
    ${dbc.Contact_Address}, 
    ${dbc.Contact_Reconnect_Time}, 
    ${dbc.Contact_Reconnect_Time_Date},
    ${dbc.Contact_Primary_Assignee},
    ((${endOfDayDate.getTime()} - maxDate) - ${
        dbc.Contact_Reconnect_Time
      }) * -1 AS connectTime 
    FROM (SELECT eventContactID, 
    MAX(eventStart) AS maxDate 
    FROM Events 
    WHERE eventStart <= ${Date.now()} 
    GROUP BY eventContactID) Latest 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON Latest.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${
        dbc.Contact_ID
      } 
    WHERE ${dbc.Contact_Primary_Assignee} = ? 
    AND ${dbc.Contact_Reconnect_Time} IS NOT NULL
    AND ${dbc.Contact_Reconnect_Time} > 0 
    ORDER BY connectTime ASC`,
      {
        replacements: [userName],
        model: Contact,
        mapToModel: true, // pass true here if you have any mapped fields
      }
    )
    .then((reconnects) => {
      res.send(reconnects);
    })
    .catch((err) => console.log(err));
};

exports.getContactReconnectTime = (req, res, next) => {
  let actualDate = new Date();
  let endOfDayDate = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate(),
    23,
    59,
    59
  );

  let contactID = req.params.id;
  sequelize
    .query(
      `SELECT DISTINCT 
    maxDate, 
    ${dbc.Contacts_Table_Name}.${dbc.Contact_ID}, 
    ${dbc.Contact_First_Name}, 
    ${dbc.Contact_Last_Name}, 
    ${dbc.Contact_Phone}, 
    ${dbc.Contact_Email}, 
    ${dbc.Contact_Address}, 
    ${dbc.Contact_Reconnect_Time}, 
    ${dbc.Contact_Reconnect_Time_Date}, 
    ((${endOfDayDate.getTime()} - maxDate) - ${
        dbc.Contact_Reconnect_Time
      }) * -1 AS connectTime 
    FROM (SELECT eventContactID, 
    MAX(eventStart) AS maxDate 
    FROM Events 
    WHERE eventStart <= ${Date.now()} 
    GROUP BY eventContactID) Latest 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON Latest.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${
        dbc.Contact_ID
      } 
    WHERE ${dbc.Contact_ID} = ?`,
      {
        replacements: [contactID],
        model: Contact,
        mapToModel: true, // pass true here if you have any mapped fields
      }
    )
    .then((reconnects) => {
      res.send(reconnects);
    })
    .catch((err) => console.log(err));
};
