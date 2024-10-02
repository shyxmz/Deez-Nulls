import React, { useState } from "react";

function KycForm() {
  const [kycInfo, setKycInfo] = useState({
    companyName: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    companyAddress: "",
    companyCity: "",
    companyState: "",
    companyZip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKycInfo({ ...kycInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(kycInfo),
      });

      const result = await response.json();
      if (result.success) {
        alert("KYC form submitted successfully!");
      } else {
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    }
  };

  return (
    <section className="bg-gray-700 min-h-1/2 flex items-center justify-center">
      <div className="bg-gradient-to-r from-orange-300 to-red-400 backdrop-blur-lg bg-opacity-70 flex rounded-2xl shadow-lg w-[70%] p-5 items-center mx-auto">
        <div className="w-full max-w-2xl p-8">
          <h1 className="text-3xl font-bold text-[#002D74] text-center mb-6">KYC Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Details */}
            <div>
              <label className="block mb-1 font-semibold text-white">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={kycInfo.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Contact Person */}
            <div>
              <label className="block mb-1 font-semibold text-white">Contact Person</label>
              <input
                type="text"
                name="contactPerson"
                value={kycInfo.contactPerson}
                onChange={handleChange}
                placeholder="Enter contact person's name"
                className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Contact Email */}
            <div>
              <label className="block mb-1 font-semibold text-white">Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                value={kycInfo.contactEmail}
                onChange={handleChange}
                placeholder="Enter contact email"
                className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Contact Phone */}
            <div>
              <label className="block mb-1 font-semibold text-white">Contact Phone</label>
              <input
                type="text"
                name="contactPhone"
                value={kycInfo.contactPhone}
                onChange={handleChange}
                placeholder="Enter contact phone number"
                className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 font-semibold text-white">Company Address</label>
              <textarea
                name="companyAddress"
                value={kycInfo.companyAddress}
                onChange={handleChange}
                placeholder="Enter company address"
                className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* City */}
              <div>
                <label className="block mb-1 font-semibold text-white">City</label>
                <input
                  type="text"
                  name="companyCity"
                  value={kycInfo.companyCity}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* State */}
              <div>
                <label className="block mb-1 font-semibold text-white">State</label>
                <input
                  type="text"
                  name="companyState"
                  value={kycInfo.companyState}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Zip */}
            <div>
              <label className="block mb-1 font-semibold text-white">Zip Code</label>
              <input
                type="text"
                name="companyZip"
                value={kycInfo.companyZip}
                onChange={handleChange}
                placeholder="Zip Code"
                className="w-full p-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-6 font-semibold text-white bg-[#002D74] rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit KYC
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default KycForm;
