const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contacts");

//-------------------------------------------------------Gets
//all contacts
router.get("/all",  contactController.getAllContacts);

//by id
router.get("/get/:id", contactController.getContactByID);

//--------------------------------------------------------------Posts

router.post("/add", contactController.postAddContact);

//--------------------------------------------------------------Patch

router.patch("/update", contactController.patchEditContact);

//--------------------------------------------------------------Delete

router.delete('/delete', contactController.postDeleteContact);

router.delete('/bulkDelete', contactController.postBulkDeleteContacts);

module.exports = router;
