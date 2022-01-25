const fs = require("fs/promises");
const { v4 } = require("uuid");

const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");

const addContact = async (body) => {
  const newContact = { id: v4(), ...body };
  const contacts = await listContacts();
  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = addContact;
