const Contact = require("./schemas/cash-schemas");
const db = require("./db");

const listCash = async () => {
  const results = await Contact.find({});
  console.log("results:", results);
  return results;
};
const addCash = async (body) => {
  const results = await Contact.create(body);
  return results;
};
module.exports = {
  listCash,
  addCash,
};
