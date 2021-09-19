class DB {
    //Database configuration

    static  dbVersion = 5;
    static  dbNewVersion = 5;
    static  dbName = "/Mutuality";

    //Contacts table configuration
    static  contactsTableName = "Contacts";
    static  dbContactID = "contactID";
    static  firstName = "firstName";
    static  middleName = "middleName";
    static  lastName = "lastName";
    static  image = "contactImage";
    static  profession = "profession";
    static  homeTown = "town";
    static  country = "country";
    static  dob = 'contactDOB';

    static  isFavorite = 'favorite';
    static  primaryPhone = "primaryPhone";
    static  primaryPhoneCountryCode = 'primaryPhoneCountryCode';
    static  secondaryPhone = 'secondaryPhone';
    static  secondaryPhoneCountryCode = 'secondaryPhoneCountryCode';
    static  primaryEmail = "primaryEmail";
    static  secondaryEmail = "secondaryEmail";
    static  primaryAddress = "primaryAddress";
    static  secondaryAddress = "secondaryAddress";
    static  rawPrimaryAddress = 'googleRawPrimaryAddress';
    static  rawSecondaryAddress = 'googleRawSecondaryAddress';
    static  primaryWebsite = 'primaryWebsite';
    static  secondaryWebsite = 'secondaryWebsite';
    static  ethnicity = "ethnicity";
    static  favoriteFood = "favoriteFood";
    static  favoriteColor = "favoriteColor";
    static  favoriteDrink = "favoriteDrink";
    static  favoriteCountry = "favoriteCountry";
    static  favoriteHobby = "favoriteHobby";
    static  religiousView = "religiousView";
    static  reconnectTimeframe = 'reconnectTimeFrame';

    static  reconnectDays = 'reconnectDate';
    static  closeness = 'closeness';
    static  themedProfile = 'themed';
    static  contactCreatedAt = 'createdAt';
    static  contactUpdatedAt = 'updatedAt';
    static  contactCreator = 'contactCreator';
    static  contactLastContactedOn = 'lastContactedOn';
    static  contactClosenessPoints = 'closenessPoints';
    static  contactTags = 'contactTags';

    //Social Medias
    static  twitter = 'twitter';
    static  instagram = 'instagram';
    static  linkedin = 'linkedIn';
    static  facebook = 'facebook';
    static  youtube = 'youTube';
    static  pinterest = 'pinterest';
    static  yelp = 'yelp';
    static  foursquare = 'fourSquare';
    static  tiktok = 'tikTok';
    static  tumblr = 'tumblr';
    static  reddit = 'reddit';
    static  snapchat = 'snapchat';
    static  medium = 'medium';
    static  twitch = 'twitch';

    //Relationship table configuration
    static  relationshipsTableName = "Relationships";
    static  relationshipID = "relationshipID";
    static  relationshipType = "type";
    static  relationshipName = "relationshipName";
    static  relationshipImage = 'relationshipImage';
    static  relationshipNotes = 'relationshipNotes';
    static  relationshipContactID = "relationshipContactID";
    static  relationshipCreatedAt = 'createdAt';
    static  relationshipUpdatedAt = 'updatedAt';
    static  relationshipCreator = 'relationshipCreator';

    //Life Events table configuration

    static  lifeEventsParentYear = 'lifeEventParentDate';
    static  lifeEventsParentChildren = 'lifeEventChildren';
    //--
    static  lifeEventsTableName = "LifeEvents";
    static  lifeEventsID = "lifeEventID";
    static  lifeEventsParent = 'lifeEventParent';
    static  lifeEventsDate = 'lifeEventDate';
    static  lifeEventsTitle = "lifeEventTitle";
    static  lifeEventsComment = "lifeEventComment";
    static  lifeEventsIcon = "lifeEventCodePoint";
    static  lifeEventsIconFamily = 'lifeEventIconFamily';
    static  lifeEventsIconPackage = 'lifeEventIconPackage';
    static  lifeEventsContactID = "lifeEventContactID";
    static  lifeEventsCreatedAt = 'createdAt';
    static  lifeEventsUpdatedAt = 'updatedAt';
    static  lifeEventsCreator = 'lifeEventsCreator';

    //Notes table configuration
    static  notesTableName = "Notes";
    static  noteID = "noteID";
    static  noteTitle = 'noteTitle';
    static  noteEntry = "noteEntry";
    static  noteTimeStamp = 'noteTimeStamp';
    static  noteCategory = "noteCategory";
    static  noteUpdateAt = 'updatedAt';
    static  noteCreatedAt = 'createdAt';
    static  noteContactID = "noteContactID";
    static  noteCreator = 'noteCreator';

    //Events table configuration
    static  eventsTableName = "Events";
    static  eventID = "eventID";
    static  eventTitle = 'eventTitle';
    static  eventNotes = 'eventNotes';
    static  eventAllDay = 'allDayEvent';
    static  eventType = 'eventType';
    static  eventStartTime = 'eventStart';
    static  eventEndTime = 'eventEnd';
    static  eventContactID = "eventContactID";
    static  eventCreatedAt = 'createdAt';
    static  eventUpdatedAt = 'updatedAt';
    static  eventCreator = 'eventCreator';

    //location
    static  eventLocationName = "eventLocationName";
    static  eventAddress = 'eventAddress';
    static  eventRawAddress = 'eventRawAddress';

    //User table configuration
    static  usersTableName = "Users";
    static  userID = 'userID';
    static  userImage = "userImage";
    static  userName = 'userName';
    static  userMiddleName = 'userMiddleName';
    static  userLastName = 'userLastName';
    static  userPhone = 'userPhone';
    static  userEmail = 'userEmail';
    static  userFirstUse = "verifyFirstUse";
    static  userFavoritePage = 'userFavoritePage';
    static  userCurrentTags = 'userCurrentTags';
    static  userCreatedAt = 'createdAt';
    static  userUpdatedAt = 'updatedAt';
    static  userUID = 'userUID';

    //Message of The Day Table Configuration
    static  messagesTableName = 'Messages';
    static  messageID = 'messageID';
    static  messageEntry = 'dailyMessage';

    //----

    //Characteristics configuration
    static  characteristicsTableName = 'Characteristics';
    static  characteristicsParentChildren = 'characteristicsChildren';
    static  characteristicID = 'characteristicsID';
    static  characteristicCategory = 'characteristicCategory';
    static  characteristicTitle = 'characteristicsTitle';
    static  characteristicNotes = 'characteristicsNotes';
    static  characteristicContactID = 'characteristicsContactID';
    static  characteristicCreator = 'characteristicCreator';
    static  characteristicCreatedAt = 'createdAt';
    static  characteristicUpdatedAt = 'updatedAt';

    //Tags Configuration
    static  tagsTableName = 'Tags';
    static  tagsID = 'tagsID';
    static  tagsEntries = 'tagsEntry';
    static  tagsContactID = 'tagsContactID';
    static  tagsCreator = 'tagsCreator';
    static  tagsCreatedAt = 'createdAt';
    static  tagsUpdatedAt = 'updatedAt';

    //Counts Table Configuration
    static  statisticsTableName = 'Statistics';
    static  statisticID = 'statisticId';
    static  statisticParentTable = 'statisticParentTable';
    static  statisticParentColumn = 'statisticParentColumn';
    static  statisticsParentID = 'statisticParentID';
    static  statisticContactID = 'statisticContactID';
    static  statisticContactPoints = 'statisticsContactPoints';
    static  statisticCreatedAt = 'statisticCreatedAt';
    static  statisticUpdatedAt = 'statisticUpdatedAt';
    static  statisticCreator = 'statisticCreator';}

