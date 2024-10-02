// controllers/report.controller.js
const Report = require('../Models/report');
const fs = require('fs');
const path = require('path');

// Controller to handle report submission
exports.submitReport = async (req, res) => {
  try {
    // Extract monthReport from request body and file from request
    const { monthReport } = req.body;
    const file = req.file;

    // Validate if monthReport and file are provided
    if (!monthReport || monthReport.trim() === '') {
      return res.status(400).json({ success: false, error: 'Month report description is required' });
    }

    if (!file) {
      return res.status(400).json({ success: false, error: 'File is required' });
    }

    // Check if file is a valid format (e.g., PDF, docx, etc.)
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      // Delete the uploaded file if it's not a valid type
      fs.unlinkSync(file.path);
      return res.status(400).json({ success: false, error: 'Invalid file format. Only PDF or Word documents are allowed.' });
    }

    // Check if file size exceeds limit (e.g., 5MB)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      // Delete the uploaded file if it's too large
      fs.unlinkSync(file.path);
      return res.status(400).json({ success: false, error: 'File size exceeds the limit of 5MB.' });
    }

    // Save the report in the database
    const report = new Report({
      monthReport: monthReport.trim(),
      file: file.path, // Save the file path
    });

    await report.save();

    // Return a success response with the saved report data
    res.status(201).json({ success: true, message: 'Report submitted successfully!', report });

  } catch (error) {
    console.error('Error saving report:', error);

    // Handle any specific file deletion in case of an error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path); // Delete the file if an error occurs
    }

    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Controller to handle getting all reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find(); // Fetch all reports
    res.status(200).json({ success: true, reports });
  } catch (error) {
    console.error('Error retrieving reports:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Controller to handle downloading a report file
exports.downloadReport = (req, res) => {
  const { fileName } = req.params; // Extract file name from request parameters
  const filePath = path.join(__dirname, '../uploads', fileName); // Construct the file path

  res.download(filePath, (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(404).send('File not found');
    }
  });
};