const Contact = require("./schemas/cash-schemas");
const db = require("./db");
const Seting = require("./schemas/setings-schemas");

const listCash = async () => {
  const results = await Contact.find({});
  return results;
};
const addCash = async (body) => {
  const results = await Contact.create(body);
  return results;
};
const listSetings = async () => {
  const results = await Seting.find({
    _id: { $eq: "60950be047618a42eec21789" },
  });
  return results;
};
const addSetings = async (id, body) => {
  const results = await Seting.updateOne({ _id: id }, { $set: body });
  return results;
};
module.exports = {
  listCash,
  addCash,
  listSetings,
  addSetings,
};
