const Contact = require("./schemas/cash-schemas");
const db = require("./db");
const Seting = require("./schemas/setings-schemas");
const Debts = require("./schemas/debts-schemas");

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
const listDebts = async () => {
  const results = await Debts.find({});
  return results;
};
const itemDebtById = async (id) => {
  const results = await Debts.find({ _id: id });
  return results;
};
const addDebts = async (body) => {
  const results = await Debts.create(body);
  return results;
};
const editDebt = async (id, body) => {
  const res = await Debts.updateOne({ _id: id }, { $set: body });
  return res;
};
const deleteDebts = async (id) => {
  const res = await Debts.remove({ _id: id });
  return res;
};

module.exports = {
  listCash,
  addCash,
  listSetings,
  addSetings,
  listDebts,
  itemDebtById,
  addDebts,
  editDebt,
  deleteDebts,
};
