const contacts = require("../../models/contacts/index");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

module.exports = getAllContacts;
