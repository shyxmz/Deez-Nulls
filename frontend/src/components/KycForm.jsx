import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const [notification, setNotification] = useState({ message: "", type: "" });
  const navigate = useNavigate(); // Initialize the navigate function

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
        setNotification({ message: "KYC form submitted successfully!", type: "success" });
        setTimeout(() => {
          navigate("/startupLanding"); // Redirect to startupLanding page
        }, 2000); // Redirect after 2 seconds
      } else {
        setNotification({ message: "Submission failed, please try again.", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Error submitting form. Please check your connection.", type: "error" });
    }
  };

  return (
    <section className="bg-gray-700 min-h-screen flex items-center justify-center relative">
      <div className="bg-gradient-to-r from-orange-300 to-red-400 backdrop-blur-lg bg-opacity-70 flex rounded-2xl shadow-lg w-[70%] p-5 items-center mx-auto">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-5xl text-[#002D74] text-center">KYC Form</h2>
          <p className="text-s mt-4 text-[#002D74] text-center">
            Fill in the details to complete your KYC
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              name="companyName"
              value={kycInfo.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="p-2 rounded-xl border"
              required
            />
            <input
              type="text"
              name="contactPerson"
              value={kycInfo.contactPerson}
              onChange={handleChange}
              placeholder="Contact Person"
              className="p-2 rounded-xl border"
              required
            />
            <input
              type="email"
              name="contactEmail"
              value={kycInfo.contactEmail}
              onChange={handleChange}
              placeholder="Contact Email"
              className="p-2 rounded-xl border"
              required
            />
            <input
              type="text"
              name="contactPhone"
              value={kycInfo.contactPhone}
              onChange={handleChange}
              placeholder="Contact Phone"
              className="p-2 rounded-xl border"
              required
            />
            <textarea
              name="companyAddress"
              value={kycInfo.companyAddress}
              onChange={handleChange}
              placeholder="Company Address"
              className="p-2 rounded-xl border"
              required
            ></textarea>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="companyCity"
                value={kycInfo.companyCity}
                onChange={handleChange}
                placeholder="City"
                className="p-2 rounded-xl border"
                required
              />
              <input
                type="text"
                name="companyState"
                value={kycInfo.companyState}
                onChange={handleChange}
                placeholder="State"
                className="p-2 rounded-xl border"
                required
              />
            </div>
            <input
              type="text"
              name="companyZip"
              value={kycInfo.companyZip}
              onChange={handleChange}
              placeholder="Zip Code"
              className="p-2 rounded-xl border"
              required
            />
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Submit KYC
            </button>
          </form>
        </div>

        {/* Optional image section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/564x/cb/cb/db/cbcbdb6c48a5f2d423e87f2356540bc8.jpg" // Replace with your image URL
            alt="KYC"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Notification Pop-up */}
      {notification.message && (
        <div className={`fixed top-10 right-10 p-4 rounded-lg shadow-lg text-white ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
}

export default KycForm;
