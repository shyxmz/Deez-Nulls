const joi = require("joi");

// KYC form validation middleware
const kycValidation = (req, res, next) => {
  const schema = joi.object({
    companyName: joi.string().min(3).max(100).required(),
    contactPerson: joi.string().min(3).max(100).required(),
    contactEmail: joi.string().email().required(),
    contactPhone: joi.string().min(10).max(15).required(),
    companyAddress: joi.string().required(),
    companyCity: joi.string().required(),
    companyState: joi.string().required(),
    companyZip: joi.string().min(5).max(10).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad request",
      error: error.details[0].message,
    });
  }
  next();
};

module.exports = {
  kycValidation,
};