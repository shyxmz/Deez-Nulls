// models/report.model.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  monthReport: {
    type: String,
    required: true,
  },
  file: {
    type: String, // Store the file path or URL
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;