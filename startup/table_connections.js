const express = require("express");
const Contact = require("../models/contact");
const User = require("../models/user");
const Note = require("../models/note");
const LifeEvent = require("../models/life_event");
const Relationship = require("../models/relationships");
const Tag = require("../models/tag");
const Event = require("../models/event");
const Characteristics = require("../models/characteristics");

module.exports = function (app) {
    app.use(express.json());
    //users
    User.hasMany(Contact, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "contactCreator",
    });

    //notes
    User.hasMany(Note, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "noteCreator",
    });


    //events
    User.hasMany(Event, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "eventCreator",
    });


    //life events
    User.hasMany(LifeEvent, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "lifeEventsCreator",
    });


    //relationships
    User.hasMany(Relationship, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "relationshipCreator",
    });


    //tags
    User.hasMany(Tag, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "tagsCreator",
    });

    //Characteristics
    User.hasMany(Characteristics, {
        constraints: true,
        onDelete: "CASCADE",
        sourceKey: "userUID",
        foreignKey: "characteristicCreator",
    });

};
