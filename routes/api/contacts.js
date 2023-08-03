const express = require("express");

const router = express.Router();

const contactsModels = require("../../models/contacts");

const { HttpError } = require("../../helpers");

const { addChema } = require("../../utils/validation/contactValidationSchemas");

router.get("/", async (req, res, next) => {
  try {
    const contactsList = await contactsModels.listContacts();
    res.json(contactsList);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsModels.getContactById(contactId);
    if (!result) {
      throw new HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addChema.validate(req.body);
    if (error) {
      throw new HttpError(400, error.message);
    }
    const result = await contactsModels.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsModels.removeContact(contactId);
    if (!result) {
      throw new HttpError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addChema.validate(req.body);
    if (error) {
      throw new HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await contactsModels.updateContact(contactId, req.body);
    if (!result) {
      throw new HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
