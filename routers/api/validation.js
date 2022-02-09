const Joi = require("joi");

const schemaAddCash = Joi.object({
  thousand: Joi.number(),
  hundred: Joi.number(),
  fiveHundred: Joi.number(),
  twoHundred: Joi.number(),
  fifty: Joi.number(),
  twenty: Joi.number(),
  ten: Joi.number(),
  five: Joi.number(),
  two: Joi.number(),
  one: Joi.number(),
  other: Joi.number(),
  sum: Joi.number(),
});

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj);
  if (error) {
    // const [{ message }] = error.details;
    console.log(error.details[0].path);
    return next({
      status: 400,
      message: `missing required ${error.details[0].path} field`,
    });
  }
  next();
};

module.exports.addCash = (req, res, next) => {
  return validate(schemaAddCash, req.body, next);
};
