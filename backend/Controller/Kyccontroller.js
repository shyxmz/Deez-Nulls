const Kyc = require('../Models/Kyc');

const submitKyc = async (req, res) => {
  try {
    const kycData = req.body;

    
    const newKyc = new Kyc(kycData);
    await newKyc.save();

    res.status(201).json({
      message: "KYC form submitted successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

 
const getAllKyc = async (req, res) => {
  try {
    const kycRecords = await Kyc.find();
    res.status(200).json({
      message: "KYC records fetched successfully",
      success: true,
      data: kycRecords,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = {
  submitKyc,
  getAllKyc,
};