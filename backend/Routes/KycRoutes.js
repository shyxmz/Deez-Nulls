const express = require("express");
const router = express.Router();
const { submitKyc, getAllKyc } = require("../Controller/Kyccontroller");
const { kycValidation } = require("../Middlewares/kycValidation");

// Route to submit KYC form
router.post("/kyc", kycValidation, submitKyc);

router.get("/kyc", getAllKyc);

module.exports = router;