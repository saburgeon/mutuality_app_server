const dbc = require("../config/db_constants");

class Query {
    static insertQuery(tableName, keys) {
        return `INSERT INTO ${tableName}(${keys}) VALUES ?`
    }

    static updateQuery(tableName, keys, values) {
        let baseOf = `UPDATE ${tableName} SET `;
        let lastString = `${keys[keys.length - 1]} = '${values[values.length - 1]}' WHERE ${keys[0]} = ?;`
        for (let i = 1; i < keys.length - 1; i++) {
            let string = `${keys[i]} = '${values[i]}',`;
            baseOf += string;
        }
        return baseOf.concat(lastString);
    }

    static deleteQuery(tableName, columnName, idList) {
        let baseOf = `DELETE FROM ${tableName} WHERE ${columnName} IN (`;
        let lastString = `${idList[idList.length - 1]})`
        for (let i = 0; i < idList.length - 1; i++) {
            let string = `${idList[i]},`
            baseOf += string;
        }
        return baseOf.concat(lastString);
    }

    static getUserData = `SELECT * 
    FROM Settings 
    WHERE ${dbc.User_Table_Name}.${dbc.User_UID}=?`

    //selectAllEvents

    /*
        static getOverviewEventsByDay =
      ` SELECT *
        FROM $Event_Table_Name
        INNER JOIN $Contacts_Table_Name
        ON $Event_Table_Name.$Event_Contact_ID = $Contacts_Table_Name.$Contact_ID
        AND (${Duration(days: 1).inMilliseconds} * ($Event_Table_Name.$Event_Start/${Duration(days: 1).inMilliseconds})) + ${timeDiff()} = $day`;

    */

    static timelineLength(contactID) {
        return `SELECT Count(${dbc.LifeEvents_Table_Name}.${dbc.LifeEvents_Contact_ID}) AS timeLineLength 
        FROM ${dbc.LifeEvents_Table_Name} 
        WHERE ${dbc.LifeEvents_Table_Name}.${dbc.LifeEvents_Contact_ID}= ${contactID}`;
    }


    static relationshipsLength(contactID) {
        return `SELECT Count(${dbc.Relationships_Table_Name}.${dbc.Relationship_Contact_ID}) AS relationshipsLength
        FROM ${dbc.Relationships_Table_Name} 
        WHERE ${dbc.Relationships_Table_Name}.${dbc.Relationship_Contact_ID}=${contactID}`;
    }

    static notesLength(contactID) {
        return `SELECT Count(${dbc.Note_Table_Name}.${dbc.Note_Contact_ID}) AS notesLength 
         FROM ${dbc.Note_Table_Name} 
         WHERE ${dbc.Note_Table_Name}.${dbc.Note_Contact_ID}=${contactID}`;
    }

    static characteristicsLength(contactID) {
        return `SELECT Count(${dbc.Traits_Table_Name}.${dbc.Traits_Contact_ID}) 
        FROM ${dbc.Traits_Table_Name} 
        WHERE ${dbc.Traits_Table_Name}.${dbc.Traits_Contact_ID} = ${contactID}`;
    }

    static tagsLength(contactID) {
        return `SELECT Count(${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID}) 
        FROM ${dbc.Tags_Table_Name} 
        WHERE ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID}= ${contactID}`;
    }

    //Contact query for points
    static contactPoints(contactID) {
        return `SELECT * , 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_First_Name}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Ethnicity}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Profession}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Town}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Country}) +   
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Phone}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Email}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Address}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Favorite_Color}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Favorite_Drink}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Favorite_Food}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Favorite_Hobby}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Favorite_Country}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Religious_View}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_Image}) + 
        Count(${dbc.Contacts_Table_Name}.${dbc.Contact_DOB}) + 
        (SELECT * FROM (${Query.timelineLength(contactID)}) timelineLength) + 
        (SELECT * FROM (${Query.notesLength(contactID)}) notesLength) + 
        (SELECT * FROM (${Query.relationshipsLength(contactID)}) relationshipsLength) + 
        (SELECT * FROM (${Query.tagsLength(contactID)}) tagsLength) + 
        (SELECT * FROM (${Query.characteristicsLength(contactID)}) characteristicsLength) AS Points 
        FROM ${dbc.Contacts_Table_Name} 
        GROUP BY ${dbc.Contact_ID}`;
    }


    //Determine Closeness and return contacts
    static contactsCloseness = `SELECT *, 
        CASE 
        WHEN Points < 20 THEN 'Just Met' 
        WHEN Points < 40 THEN 'Acquaintances' 
        WHEN Points < 60 THEN 'Friends' 
        WHEN Points < 80 THEN 'Close Friends' 
        WHEN Points < 100 THEN 'Family' 
        WHEN Points < 120 THEN 'App Mastery' 
        END closenessEntry 
        FROM (${this.contactPoints(`${dbc.Contacts_Table_Name}.${dbc.Contact_ID}`)}) contactPoints`;



    static getSpecificContactCloseness = `SELECT *, 
        CASE 
        WHEN Points < 20 THEN 'Just Met' 
        WHEN Points < 40 THEN 'Acquaintances' 
        WHEN Points < 60 THEN 'Friends' 
        WHEN Points < 80 THEN 'Close Friends' 
        WHEN Points < 100 THEN 'Family' 
        WHEN Points < 120 THEN 'App Mastery' 
        END closenessEntry 
        FROM (${this.contactPoints(`${dbc.Contacts_Table_Name}.${dbc.Contact_ID}`)}) contactPoints 
        WHERE ${dbc.Contact_ID} = ?`;



    static selectLatestEvents = `SELECT ${dbc.Event_Contact_ID},
    MAX(${dbc.Event_Start}) AS maxDate 
    FROM ${dbc.Event_Table_Name} 
    WHERE maxDate <= ${Date.now()} 
    GROUP BY ${dbc.Event_Contact_ID}`;

    static getAllContacts(value) {
        return `SELECT * 
        FROM ${dbc.Contacts_Table_Name} 
        LEFT JOIN (${this.selectLatestEvents}) latestEvents 
        ON ${dbc.Contact_ID} = ${dbc.Event_Contact_ID} 
        LEFT JOIN ${dbc.Tags_Table_Name} 
        ON ${dbc.Contact_ID} = ${dbc.Tags_Contact_ID} 
        ${value}`;
    }

    static checkContactsAssigned = `SELECT * 
        FROM ${dbc.Contacts_Table_Name} 
        WHERE ${dbc.Contact_Primary_Assignee} = ?`;

    static contactCount = `SELECT Count(${dbc.Contact_ID}) AS countOf FROM ${dbc.Contacts_Table_Name}`

    static favoriteContacts = `SELECT * 
        FROM ${dbc.Favorite_Table_Name} 
        LEFT JOIN ${dbc.Contacts_Table_Name} 
        ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Favorite_Table_Name}.${dbc.Favorite_Contact_ID} 
        WHERE ${dbc.Favorite_User_UID} = ? 
        ORDER BY ${dbc.Contact_First_Name}`;

    static isContactFavorite = `SELECT * 
        FROM ${dbc.Favorite_Table_Name} 
        WHERE ${dbc.Favorite_Contact_ID} = ?
        AND ${dbc.Favorite_User_UID} = ?`;

    static percentComplete(column) {
        return `SELECT
        (SELECT Count(contactID) AS count
                FROM Contacts
                WHERE Length(contactID) > 0
                AND contactID IS NOT NULL) AS connected,
                (Count(contactID) - (SELECT Count(contactID) AS count
                FROM Contacts
                WHERE Length(${column}) > 0
                AND ${column} IS NOT NULL)) AS remaining
                FROM Contacts`;
    }

    static contactFilter(text) {
        return `SELECT ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Phone}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee} 
        FROM ${dbc.Contacts_Table_Name} 
        LEFT JOIN ${dbc.Tags_Table_Name} 
        ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
        WHERE ${dbc.Contact_First_Name} Like '%${text}%' 
        OR ${dbc.Contact_Last_Name} Like '%${text}%' 
        OR ${dbc.Tags_Entry} Like '%${text}%' 
        OR ${dbc.Contact_Closeness} Like '%${text}%' 
        OR ${dbc.Contact_Email} Like '%${text}%' 
        OR ${dbc.Contact_Phone} Like '%${text}%' 
        GROUP BY ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}`;
    }

    static contactFilterTags(text) {
        return `SELECT ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Phone}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee} 
        FROM ${dbc.Contacts_Table_Name} 
        LEFT JOIN ${dbc.Tags_Table_Name} 
        ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
        WHERE ${dbc.Tags_Entry} Like '%${text}%' 
        GROUP BY ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}`;
    }

/*
    static getUsers() {
        return `SELECT *
                FROM Settings`;
    }
*/

    static categoriesByID = `SELECT  
    FROM Category WHERE ${dbc.Category_Contact_ID} = ?`;

    //Get Contact Characteristics and the Categories
    static characteristicsByID = `SELECT * 
    FROM Characteristics WHERE ${dbc.Traits_Contact_ID} = ?`;

    static categoriesByID = `SELECT * 
    FROM Category WHERE ${dbc.Category_Contact_ID} = ?`;

    static checkCategories = `SELECT * 
    FROM Category WHERE ${dbc.Category_Name} = ? AND ${dbc.Category_Contact_ID} = ?`;

    //Get Notes for Home Screen
    static overviewNotes = `SELECT * 
    FROM Notes  
    LEFT JOIN ${dbc.Contacts_Table_Name} 
    ON Notes.${dbc.Note_Contact_ID} = Contacts.${dbc.Contact_ID} 
    WHERE ${dbc.Note_Icon_Set} = 1
    ORDER BY ${dbc.Note_Date} DESC`;

//Get all contact Notes
    static notesByID = `SELECT * 
    FROM Notes WHERE ${dbc.Note_Contact_ID} = ? 
    ORDER BY ${dbc.Note_Date} DESC, ${dbc.Note_Icon_Set}`;

    //Get contact favorite Notes
    static favoriteNotesByID = `SELECT * 
    FROM ${dbc.Note_Table_Name} WHERE ${dbc.Note_Contact_ID} = ? AND ${dbc.Note_Icon_Set} = 1 ORDER BY ${dbc.Note_Date} DESC`;
    //Get contact important  Notes
    static importantNotesByID = `SELECT * 
    FROM ${dbc.Note_Table_Name} WHERE ${dbc.Note_Contact_ID} = ? AND ${dbc.Note_Icon_Set} = 2 ORDER BY ${dbc.Note_Date} DESC`;
    //Get contact It Matters Notes
    static itMattersNotesByID = `SELECT * 
    FROM ${dbc.Note_Table_Name} WHERE ${dbc.Note_Contact_ID} = ? AND ${dbc.Note_Icon_Set} = 3 ORDER BY ${dbc.Note_Date} DESC`;
    //Get contact Good to Know Notes
    static goodToKnowNotesByID = `SELECT * 
    FROM ${dbc.Note_Table_Name} WHERE ${dbc.Note_Contact_ID} = ? AND ${dbc.Note_Icon_Set} = 4 ORDER BY ${dbc.Note_Date} DESC`;
    //Get contact I honestly don't know yet Notes
    static dontKnowNotesByID = `SELECT * 
    FROM ${dbc.Note_Table_Name} WHERE ${dbc.Note_Contact_ID} = ? AND ${dbc.Note_Icon_Set} = 5 ORDER BY ${dbc.Note_Date} DESC`;



    static allEventsByUser = `SELECT * 
    FROM ${dbc.Event_Table_Name} 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON ${dbc.Event_Table_Name}.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${dbc.Contact_ID}
    WHERE ${dbc.Contacts_Table_Name}.${dbc.Contact_Primary_Assignee} = ?`;

    static allEventsDataByUser = `SELECT * 
    FROM ${dbc.Event_Table_Name} 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON ${dbc.Event_Table_Name}.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} 
    WHERE ${dbc.Event_Table_Name}.${dbc.Event_Creator_UID} = ?`;


    static allEvents = `SELECT * 
    FROM ${dbc.Event_Table_Name} 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON ${dbc.Event_Table_Name}.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${dbc.Contact_ID}`;

    static allContactEvents = `SELECT * 
    FROM ${dbc.Event_Table_Name} 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON ${dbc.Event_Table_Name}.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${dbc.Contact_ID}
    WHERE ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ?`;





    static allEventsByDay = `SELECT * 
    FROM ${dbc.Event_Table_Name} 
    INNER JOIN ${dbc.Contacts_Table_Name} 
    ON ${dbc.Event_Table_Name}.${dbc.Event_Contact_ID} = ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} 
    WHERE (86400000 * FLOOR((${dbc.Event_Start}/86400000))) = ? 
    ORDER BY ${dbc.Event_Start} DESC`;

    static selectLatestEvents = `SELECT ${dbc.Event_Contact_ID},
    MAX(${dbc.Event_Start}) AS maxDate 
    FROM ${dbc.Event_Table_Name} 
    GROUP BY ${dbc.Event_Contact_ID} 
    Having maxDate <= ${Date.now() + 30*60000}`;

    static checkEvents = `SELECT * 
    FROM ${dbc.Event_Table_Name} 
    WHERE ${dbc.Event_Contact_ID} = ?`;


    static  selectAllTimelineYears = `SELECT ${dbc.LifeEvents_Date} 
    FROM ${dbc.LifeEvents_Table_Name} 
    GROUP BY ${dbc.LifeEvents_Date} 
    ORDER BY ${dbc.LifeEvents_Date} DESC`;

    static selectAllTimelineEvents = `SELECT * 
        FROM ${dbc.LifeEvents_Table_Name} 
        INNER JOIN ${dbc.Contacts_Table_Name} 
        ON ${dbc.LifeEvents_Table_Name}.${dbc.LifeEvents_Contact_ID} = ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} 
        WHERE ${dbc.LifeEvents_Date} >= ? 
        AND ${dbc.LifeEvents_Date} < ? 
        ORDER BY ${dbc.LifeEvents_Date} DESC`;

    static  selectUserTimelineYears = `SELECT ${dbc.LifeEvents_Date} 
    FROM ${dbc.LifeEvents_Table_Name} 
    WHERE ${dbc.LifeEvents_Table_Name}.${dbc.LifeEvents_Contact_ID} = ? 
    GROUP BY ${dbc.LifeEvents_Date} 
    ORDER BY ${dbc.LifeEvents_Date} DESC`;

    static selectUserTimelineEvents = `SELECT * 
        FROM ${dbc.LifeEvents_Table_Name} 
        WHERE ${dbc.LifeEvents_Table_Name}.${dbc.LifeEvents_Contact_ID} = ? 
        AND ${dbc.LifeEvents_Date} >= ? 
        AND ${dbc.LifeEvents_Date} < ? 
        ORDER BY ${dbc.LifeEvents_Date} DESC`;


    static selectBirthdays = `SELECT * 
    FROM ${dbc.Contacts_Table_Name} 
    WHERE ${dbc.Contact_DOB} IS NOT NULL`;

    static deleteFavorites = `DELETE
                              FROM ?
                              WHERE ? = ?`;

    static getLastContact = `SELECT MAX 
    FROM ${dbc.Contacts_Table_Name}`;


    static contactPageSearch(columnName, order, text) {
        return `SELECT ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Phone}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate  
    FROM ${dbc.Contacts_Table_Name} 
    LEFT JOIN ${dbc.Tags_Table_Name} 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
    LEFT JOIN (${Query.selectLatestEvents}) Latest 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = Latest.${dbc.Event_Contact_ID} 
    WHERE ${dbc.Contact_First_Name} Like '%${text}%' 
    OR ${dbc.Contact_Last_Name} Like '%${text}%' 
    OR ${dbc.Tags_Entry} Like '%${text}%' 
    OR ${dbc.Contact_Closeness} Like '%${text}%' 
    OR ${dbc.Contact_Email} Like '%${text}%' 
    OR ${dbc.Contact_Phone} Like '%${text}%' 
    GROUP BY ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    ORDER BY ${columnName} ${order} 
    LIMIT ?, ?`;
    }

    static contactPageSearchAssignee(columnName, order, text, assignee) {
        return `SELECT ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Phone}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    FROM ${dbc.Contacts_Table_Name} 
    LEFT JOIN ${dbc.Tags_Table_Name} 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
    LEFT JOIN (${Query.selectLatestEvents}) Latest 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = Latest.${dbc.Event_Contact_ID} 
    WHERE (${dbc.Contact_First_Name} Like '%${text}%' AND ${dbc.Contact_Primary_Assignee} Like '%${assignee}%') 
    OR (${dbc.Contact_Last_Name} Like '%${text}%' AND ${dbc.Contact_Primary_Assignee} Like '%${assignee}%') 
    OR (${dbc.Tags_Entry} Like '%${text}%' AND ${dbc.Contact_Primary_Assignee} Like '%${assignee}%') 
    OR (${dbc.Contact_Closeness} Like '%${text}%' AND ${dbc.Contact_Primary_Assignee} Like '%${assignee}%') 
    OR (${dbc.Contact_Email} Like '%${text}%' AND ${dbc.Contact_Primary_Assignee} Like '%${assignee}%') 
    OR (${dbc.Contact_Phone} Like '%${text}%' AND ${dbc.Contact_Primary_Assignee} Like '%${assignee}%') 
    GROUP BY ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    ORDER BY ${columnName} ${order} 
    LIMIT ?, ?`;
    }

    static contactPageSearchCount(text) {
        return `SELECT Count(${dbc.Contact_ID}) AS countOf 
    FROM ${dbc.Contacts_Table_Name} 
    LEFT JOIN ${dbc.Tags_Table_Name} 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
    LEFT JOIN (${Query.selectLatestEvents}) Latest 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = Latest.${dbc.Event_Contact_ID} 
    WHERE ${dbc.Contact_First_Name} Like '%${text}%' 
    OR ${dbc.Contact_Last_Name} Like '%${text}%' 
    OR ${dbc.Tags_Entry} Like '%${text}%' 
    OR ${dbc.Contact_Closeness} Like '%${text}%' 
    OR ${dbc.Contact_Email} Like '%${text}%' 
    OR ${dbc.Contact_Phone} Like '%${text}%'`;
    }

    static contactPage(columnName, order) {
        return `SELECT ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Phone}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    FROM ${dbc.Contacts_Table_Name} 
    LEFT JOIN ${dbc.Tags_Table_Name} 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
    LEFT JOIN (${Query.selectLatestEvents}) Latest 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = Latest.${dbc.Event_Contact_ID} 
    GROUP BY ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    ORDER BY ${columnName} ${order} 
    LIMIT ?, ?`;
    }

    static contactPageAssignee(columnName, order, assignee) {
        return `SELECT ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Phone}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    FROM ${dbc.Contacts_Table_Name} 
    LEFT JOIN ${dbc.Tags_Table_Name} 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID} 
    LEFT JOIN (${Query.selectLatestEvents}) Latest 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = Latest.${dbc.Event_Contact_ID} 
    WHERE ${dbc.Contact_Primary_Assignee} Like '%${assignee}%' 
    GROUP BY ${dbc.Contact_First_Name}, ${dbc.Contact_Middle_Name}, ${dbc.Contact_Last_Name}, ${dbc.Contact_Closeness}, ${dbc.Contact_ID}, ${dbc.Contact_Email}, ${dbc.Contact_Primary_Assignee}, ${dbc.Tags_Entry}, maxDate 
    ORDER BY ${columnName} ${order} 
    LIMIT ?, ?`;
    }


    static contactPageCount() {
        return `SELECT Count(${dbc.Contact_ID}) AS countOf 
    FROM ${dbc.Contacts_Table_Name} 
    LEFT JOIN ${dbc.Tags_Table_Name} 
    ON ${dbc.Contacts_Table_Name}.${dbc.Contact_ID} = ${dbc.Tags_Table_Name}.${dbc.Tags_Contact_ID}`;
    }

    static Select_All_Category = `SELECT * FROM ${dbc.Category_Table_Name}`;

    static Select_All_Events = `SELECT * FROM ${dbc.Event_Table_Name}`;

    static Select_All_Characteristics = `SELECT * FROM ${dbc.Traits_Table_Name}`;

    static Select_All_Family_Members = `SELECT * FROM ${dbc.Relationships_Table_Name}`;

    static Select_All_Favorites = `SELECT * FROM ${dbc.Favorite_Table_Name}`;
}


module.exports = Query;