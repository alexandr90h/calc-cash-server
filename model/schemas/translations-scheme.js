const mongoose = require("mongoose");
const {string} = require("joi");
const { Schema, model } = mongoose;

const translationScheme = new Schema(
    {
        englishWord: {type:String},
        translationWord:{type:String}
    },
    { versionKey: false, timestamps: true }
);

const TranslationScheme = model("translations", translationScheme);
module.exports = TranslationScheme;
