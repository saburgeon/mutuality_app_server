

class DB {
    static Contacts_Table_Name = "Contacts";
    static Contact_ID = "contactID";
    static Contact_First_Name = "firstName";
    static Contact_Last_Name = "lastName";
    static Contact_Ethnicity = "ethnicity";
    static Contact_Middle_Name = "middleName";
    static Contact_Profession = "profession";
    static Contact_Town = "town";
    static Contact_Country = "country";
    static Contact_Phone = "phone";
    static Contact_Email = "email";
    static Contact_Address = "address";
    static Contact_Favorite_Color = "favoriteColor";
    static Contact_Favorite_Drink = "favoriteDrink";
    static Contact_Favorite_Food = "favoriteFood";
    static Contact_Favorite_Country = "favoriteCountry";
    static Contact_Favorite_Hobby = "favoriteHobby";
    static Contact_Religious_View = "religiousView";
    static Contact_Image = "contactImage";
    static Contact_DOB = 'contactDOB';
    static Favorite_Contact = 'favorite';
    static Contact_Reconnect_Time = 'reconnectTimeFrame';
    static Contact_Reconnect_Time_Date = 'reconnectDate';
    static Contact_Closeness = 'closeness';
    static Contact_Raw_Address = 'googleRawAddress';
    static Contact_Creation_Date = 'creationDate';
    static Contact_DB_ID = 'contactDBID';
    static Contact_Creator_UID = 'contactCreatorUID';
    //Social Medias
    static Contact_Twitter = 'twitter';
    static Contact_Instagram = 'instagram';
    static Contact_LinkedIn = 'linkedIn';
    static Contact_Facebook = 'facebook';
    static Contact_YouTube = 'youTube';
    static Contact_Pinterest = 'pinterest';
    static Contact_Yelp = 'yelp';
    static Contact_FourSquare = 'fourSquare';
    static Contact_TikTok = 'tikTok';
    static Contact_Tumblr = 'tumblr';
    static Contact_Reddit = 'reddit';
    static Contact_SnapChat = 'snapchat';
    static Contact_Medium = 'medium';
    static Contact_Twitch = 'twitch';
    static Contact_Website = 'website';
    static Contact_Primary_Assignee = 'contactPrimaryAssignee';


    //Favorites table configuration
    static Favorite_Table_Name = 'Favorites';
    static Favorite_ID = 'favoriteID';
    static Favorite_Contact_ID = 'favoriteContactID';
    static Favorite_User_UID = 'userUID';

    //Timeline table configuration
    static  LifeEvents_Table_Name = "LifeEvents";
    static  LifeEvents_ID = "lifeEventID";
    static  LifeEvents_Date = 'lifeEventDate';
    static  LifeEvents_Title = "lifeEventTitle";
    static  LifeEvents_Comment = "lifeEventComment";
    static  LifeEvents_Icon = "lifeEventCodePoint";
    static  LifeEvents_Icon_Family = 'lifeEventIconFamily';
    static  LifeEvents_Icon_Package = 'lifeEventIconPackage';
    static  LifeEvents_Contact_ID = "lifeEventContactID";
    static  LifeEvents_Expanded_State = 'lifeEventExpandedState';
    static  LifeEvents_DB_ID = 'lifeEventsDBID';
    static  LifeEvents_Creator_UID = 'lifeEventCreatorUID';

    //Family table configuration
    static Relationships_Table_Name = "Relationships";
    static  Relationships_ID = "relationshipID";
    static  Relationship_Type = "relationshipType";
    static Relationship_Name = "relationshipName";
    static  Relationship_Contact_ID = "relationshipContactID";
    static Relationship_Image = 'relationshipImage';
    static  Relationship_Notes = 'relationshipNotes';
    static  Relationship_Creator_UID = 'relationshipCreatorUID';


    //Notes table configuration
    static Note_Table_Name = "Notes";
    static Note_ID = "noteID";
    static Note_Contact_ID = "noteContactID";
    static Note_Comment = "noteComment";
    static Note_Date = 'noteDate';
    static Note_Icon_Set = "noteIconSet";
    static Note_Image_One = 'noteImageOne';
    static Note_Image_Two = 'noteImageTwo';
    static Note_Image_Three = 'noteImageThree';
    static Note_Image_Four = 'noteImageFour';
    static Note_Image_Five = 'noteImageFive';
    static Note_Expanded_State = 'notesExpandedState';
    static Note_DB_ID = 'noteDBID';
    static Note_Creator_UID = 'noteCreatorUID';

    //Events table configuration
    static Event_Table_Name = "Events";
    static Event_ID = "eventID";
    static Event_Title = 'eventTitle';
    static Event_Comment = 'eventComment';
    static Event_Contact_ID = "eventContactID";
    static Event_Expanded_State = 'eventsExpandedState';
    static Event_All_Day = 'allDayEvent';
    static Event_Type = 'eventType';
    static Event_Start = 'eventStart';
    static Event_End = 'eventEnd';
    static Event_DB_ID = 'eventDBID';
    static  Event_Creator_UID = 'eventCreatorUID';
    //business Details
    static Event_Business_Logo = "eventBusinessLogo";
    static Event_Business_Hours = 'eventBusinessHours';
    //location
    static Event_Location_Name = "eventLocationName";
    static Event_Address = 'eventAddress';
    static Event_Raw_Address = 'eventRawAddress';

    //User table configuration
    static User_Table_Name = "Settings";
    static User_ID = 'userID';
    static User_Image = "userImage";
    static User_Name = 'userName';
    static User_Middle_Name = 'userMiddleName';
    static User_Last_Name = 'userLastName';
    static User_Color_Theme = 'colorSelection';
    static User_First_Use = "verifyFirstUse";
    static User_Text_Color = 'userTextColor';
    static User_Accents_Color = 'userAccentsColor';
    static User_Selections_Color = 'userSelectionsColor';
    static User_Background_Color = 'userBackgroundColor';
    static User_Favorite_Page = 'userFavoritePage';
    static User_DB_ID = 'userDBID';
    static User_UID = 'userUID';
    //Message of The Day Table Configuration
    static Message_Of_The_Day_Table_Name = 'Messages';
    static Message_Of_The_Day_ID = 'messageID';
    static Message_Of_The_Day = 'dailyMessage';
    static Message_Creator_UID = 'messageCreatorUID';

    //Category configuration
    static Category_Table_Name = 'Category';
    static Category_ID = 'categoryID';
    static Category_Contact_ID = 'categoryContactID';
    static Category_Name = 'categoryName';
    static Category_Expanded_State = 'categoryExpandedState';
    static Category_DB_ID = 'categoryDBID';
    static Category_Creator_UID = 'categoryCreatorUID';

    //Characteristics configuration
    static Traits_Table_Name = 'Traits';
    static Traits_ID = 'traitID';
    static Traits_Contact_ID = 'traitContactID';
    static Traits_Category = 'traitCategory';
    static Traits_Item = 'traitItem';
    static Traits_Comment = 'traitComment';
    static Traits_Creator_UID = 'traitCreatorUID';

    //Tags Configuration
    static Tags_Table_Name = 'Tags';
    static Tags_ID = 'tagsID';
    static Tags_Contact_ID = 'tagsContactID';
    static Tags_Entry = 'tagsEntry';
    static Tags_DB_ID = 'tagsDBID';
    static Tags_Creator_UID = 'tagsCreatorUID';

    //Memories Configuration

    static Memories_Table_Name = 'Memories';
    static Memories_ID = 'memoriesID';
    static Memories_Contact_ID = 'memoriesContactID';
    static Memories_Image_Path = 'memoriesEntry';
    static Memories_Title = 'memoriesTitle';
    static Memories_Comment = 'memoriesComment';
    static Memories_Date = 'memoriesDate';
    static Memories_DB_ID = 'memoriesDBID';
    static Memories_Creator_UID = 'memoriesCreatorUID';

    static Del_Table_Name = 'del';
    static Del_ID = 'delID';
    static Del_Table_Of = 'tableOf';
    static Del_Column_Of = 'columnOf';
    static Del_ID_Of = 'IDOf';
}

module.exports = DB;
