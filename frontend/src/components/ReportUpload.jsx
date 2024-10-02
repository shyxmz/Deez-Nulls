// src/ReportUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ReportUpload = () => {
  const [monthReport, setMonthReport] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('monthReport', monthReport);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/report/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Show success toast notification
      toast.success(response.data.message);
      
      // Navigate back to startup landing page after 2 seconds
      setTimeout(() => {
        navigate('/startupLanding');
      }, 2000);
    } catch (error) {
      // Show error toast notification
      toast.error(error.response.data.error);
    }
  };

  return (
    <section className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-orange-300 to-red-400 backdrop-blur-lg bg-opacity-70 flex rounded-2xl shadow-lg w-[70%] p-5 items-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-16">
          {/* Left Column for Inputs */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-4xl text-[#002D74]">Upload Report</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={monthReport}
                  onChange={(e) => setMonthReport(e.target.value)}
                  required
                  placeholder="Month Report"
                  className="p-2 mt-4 rounded-xl border w-full"
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Submit Report
              </button>
            </form>
          </div>

          {/* Right Column for Image */}
          <div className="flex items-center justify-center">
            <img 
              src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" 
              alt="Upload Report" 
              className="w-80 h-80 mx-56 rounded-xl" 
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ReportUpload;
