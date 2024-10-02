// src/ReportList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:8080/report/submit');
      setReports(response.data.reports);
    } catch (err) {
      setError('Error fetching reports');
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Uploaded Reports</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <div key={report._id} className=" border rounded shadow p-4">
            <h3 className="font-semibold">{report.monthReport}</h3>
            <a
              href={`http://localhost:8080/uploads/${report.file.split('/').pop()}`} // Ensure you have the correct path
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 mt-2 block"
            >
              Download File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportList;