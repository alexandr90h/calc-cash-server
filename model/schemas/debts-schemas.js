const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const debtSchema = new Schema(
  {
    name: String,
    money: Number,
    note: String,
    importance: Boolean,
  },
  { versionKey: false, timestamps: true }
);

const Debts = model("debts", debtSchema);
module.exports = Debts;
