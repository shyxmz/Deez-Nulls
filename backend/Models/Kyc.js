const mongoose = require("mongoose");

// Define the KYC schema
const kycSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    contactPerson: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    contactEmail: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    contactPhone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 15,
    },
    companyAddress: {
      type: String,
      required: true,
    },
    companyCity: {
      type: String,
      required: true,
    },
    companyState: {
      type: String,
      required: true,
    },
    companyZip: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 10,
    },
  },
  { timestamps: true }
);

const Kyc = mongoose.model("Kyc", kycSchema);
module.exports = Kyc;