// routes/report.routes.js
const express = require('express');
const router = express.Router();
const upload = require('../Middlewares/uploadmiddleware');
const reportController = require('../Controller/reportcontroller');

// Route to submit report
router.post('/submit', upload.single('file'), reportController.submitReport);

// Route to get all reports
router.get('/submit', reportController.getReports); // This will fetch all reports

module.exports = router;