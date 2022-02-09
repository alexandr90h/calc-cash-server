const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cashSchema = new Schema(
  {
    other: Number,
    visibleMonth: String,
  },
  { versionKey: false, timestamps: true }
);

const Seting = model("seting", cashSchema);
module.exports = Seting;
