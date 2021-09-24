const express = require("express");
const Contact = require("../models/contact");
const User = require("../models/user");
const Note = require("../models/note");
const LifeEvent = require("../models/life_event");
const Relationship = require("../models/relationships");
const Tag = require("../models/tag");
const Event = require("../models/event");
const Characteristics = require("models/characteristics");

module.exports = function (app) {
    app.use(express.json());
    //users
    User.hasMany(Contact, { constraints: true });

    //notes
    Contact.hasMany(Note, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "contactID",
        foreignKey: "noteContactID",
    });

    Note.hasOne(Contact, {
        constraints: true,
        sourceKey: "noteContactID",
        foreignKey: "contactID",
    });

    //events
    Contact.hasMany(Event, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "contactID",
        foreignKey: "eventContactID",
    });
    Event.hasOne(Contact, {
        constraints: true,
        sourceKey: "eventContactID",
        foreignKey: "contactID",
    });

    //life events
    Contact.hasMany(LifeEvent, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "contactID",
        foreignKey: "lifeEventContactID",
    });
    LifeEvent.hasOne(Contact, {
        constraints: true,
        sourceKey: "lifeEventContactID",
        foreignKey: "contactID",
    });

    //relationships
    Contact.hasMany(Relationship, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "contactID",
        foreignKey: "relationshipContactID",
    });
    Relationship.hasOne(Contact, {
        constraints: true,
        sourceKey: "relationshipContactID",
        foreignKey: "contactID",
    });

    //tags
    Contact.hasMany(Tag, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "contactID",
        foreignKey: "tagsContactID",
    });
    Tag.hasOne(Contact, {
        constraints: true,
        sourceKey: "tagsContactID",
        foreignKey: "contactID",
    });

    //traits
    Contact.hasMany(Characteristics, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "contactID",
        foreignKey: "characteristicsContactID",
    });
    Characteristics.hasOne(Contact, {
        constraints: true,
        sourceKey: "characteristicsContactID",
        foreignKey: "contactID",
    });

};
