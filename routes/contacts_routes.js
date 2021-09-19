const express = require("express");
const query = require("../config/queries");
const db = require("../config/db-config");
const dbc = require("../config/db_constants");
const router = express.Router();
const contactController = require("../controllers/contacts");

//-------------------------------------------------------Gets
//all contacts
router.get("/all",  contactController.getAllContacts);
router.get("/all/:sorting", contactController.sortByLastEvent);

//by id
router.get("/:id", contactController.getSpecificContactData);

//check last inserted
router.get("/last",  contactController.getLastContact);

router.get("/:id/closeness", contactController.getClosenessCount);

router.get("/", contactController.filteredContacts);

router.get("/user/:name", contactController.userFilteredContacts);

router.get("/count", contactController.getContactCount);

//get birthdays
//todo verify this, might want to do it via flutter instead
router.get(
  "/birthdays/:endDate/:contactPrimaryAssignee",
  contactController.getBirthdaysByUser
);

router.get("/birthdays/:endDate/", contactController.getAllBirthdays);

//--------------------------------------------------------------Posts
router.post("/add", contactController.postAddContact);

//--------------------------------------------------------------Patch
router.patch("/update", contactController.patchEditContact);

module.exports = router;
