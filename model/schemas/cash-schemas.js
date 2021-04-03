const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cashSchema = new Schema(
  {
    question: String,
    questionId: Number,
    answers: Array,
    rightAnswer: String,
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("qa-tech", cashSchema);
module.exports = Contact;
