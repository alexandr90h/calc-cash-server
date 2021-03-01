const Contact = require("./schemas/cash-schemas");
const db = require("./db");

const listCash = async () => {
  const results = await Contact.find({});
  return results;
};
const addCash = async (body) => {
  const results = await Contact.create(body);
  return results;
};
module.exports = {
  listCash,
  //   getContactById,
  //   removeContact,
  addCash,
  //   updateContact,
};
