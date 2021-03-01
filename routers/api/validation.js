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

  //   name: Joi.string().min(3).max(30).required(),
  //   email: Joi.string().email({
  //     minDomainSegments: 2,
  //     tlds: { allow: ["com", "net"] },
  //   }),
  //   phone: Joi.string().required(),
  //   subscription: Joi.string().required(),
  //   password: Joi.string(),
  //   token: Joi.string().allow(null, ""),
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
