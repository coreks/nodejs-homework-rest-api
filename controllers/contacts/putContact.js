const { NotFound } = require("http-errors");

const contacts = require("../../models/contacts/index");

const putContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw new NotFound();
  }
  res.json(result);
};

module.exports = putContact;
