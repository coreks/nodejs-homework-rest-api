const { NotFound } = require("http-errors");

const contacts = require("../../models/contacts/index");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);

  if (!result) {
    throw new NotFound();
  }
  res.json({ message: "Contact deleted" });
};

module.exports = deleteContact;
