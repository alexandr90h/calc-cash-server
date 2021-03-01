const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cashSchema = new Schema(
  {
    thousand: Number,
    hundred: Number,
    fiveHundred: Number,
    twoHundred: Number,
    fifty: Number,
    twenty: Number,
    ten: Number,
    five: Number,
    two: Number,
    one: Number,
    other: Number,
    sum: Number,
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("cash", cashSchema);
module.exports = Contact;
