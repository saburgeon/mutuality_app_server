const express = require("express");
const indexRouter = require("../routes/index");
const generalRoutes = require('../routes/general_routes');
const contactsRoutes = require('../routes/contacts_routes');
const usersRoutes = require('../routes/users_routes');
const eventsRoutes = require('../routes/events_routes');
const relationshipsRoutes = require('../routes/relationships_routes');
const characteristicsRoutes = require('../routes/characteristics_routes');
const tagsRoutes = require('../routes/tags_routes');
const notesRoutes = require('../routes/notes_routes');
const messagesRoutes = require('../routes/messages_routes');
const lifeEventsRoutes = require('../routes/life_events_routes');

module.exports = function(app) {
    app.use(express.json());
    app.use("/", indexRouter);
    app.use('/general', generalRoutes);
    app.use('/contacts',contactsRoutes);
    app.use('/users',usersRoutes);
    app.use('/events', eventsRoutes);
    app.use('/relationships', relationshipsRoutes);
    app.use('/characteristics', characteristicsRoutes);
    app.use('/tags', tagsRoutes);
    app.use('/notes', notesRoutes);
    app.use('/messages', messagesRoutes);
    app.use('/lifeEvents', lifeEventsRoutes);
};