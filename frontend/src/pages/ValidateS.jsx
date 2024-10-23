import React from "react";

// Sample data for the boxes
const companyData = [
  {
    name: "Nintendo Ventures",
    address: "Surat, Gujarat, India",
    fundDemand: "$550,000",
    before: "May 2025",
    contact: "69878xxxxx",
  },
  {
    name: "Tech Innovations Pvt. Ltd.",
    address: "Mumbai, Maharashtra, India",
    fundDemand: "$1,200,000",
    before: "December 2024",
    contact: "98765xxxxx",
  },
  {
    name: "Green Future Industries",
    address: "Bangalore, Karnataka, India",
    fundDemand: "$900,000",
    before: "January 2025",
    contact: "12345xxxxx",
  },
  {
    name: "Smart Solutions Inc.",
    address: "Delhi, India",
    fundDemand: "$750,000",
    before: "March 2025",
    contact: "45678xxxxx",
  },
  {
    name: "Innovative Minds Co.",
    address: "Hyderabad, Telangana, India",
    fundDemand: "$650,000",
    before: "April 2025",
    contact: "54321xxxxx",
  },
  {
    name: "Future Tech Labs",
    address: "Pune, Maharashtra, India",
    fundDemand: "$500,000",
    before: "November 2024",
    contact: "67890xxxxx",
  },
  {
    name: "Apex Designs",
    address: "Chennai, Tamil Nadu, India",
    fundDemand: "$300,000",
    before: "February 2025",
    contact: "23456xxxxx",
  },
  {
    name: "Visionary Ventures",
    address: "Ahmedabad, Gujarat, India",
    fundDemand: "$400,000",
    before: "September 2024",
    contact: "78901xxxxx",
  },
];

const CompanyBoxes = () => {
  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-gray-900 text-gray-900 p-4">
      {companyData.map((company, index) => (
        <div
          key={index}
          className="w-[45%] m-4 bg-[#fffaf3] rounded-lg shadow-lg p-4 hover:border-4 hover:border-orange-500 transition duration-300 flex flex-col justify-between"
        >
          <h2 className="text-lg font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {company.name}
          </h2>
          <p className="mb-1"><strong>Address:</strong> {company.address}</p>
          <p className="mb-1"><strong>Fund Demands:</strong> {company.fundDemand}</p>
          <p className="mb-1"><strong>Before:</strong> {company.before}</p>
          <p className="mb-1"><strong>Contact:</strong> {company.contact}</p>
          <div className="flex items-center mt-4">
            <input type="checkbox" id={`validate-${index}`} className="mr-2" />
            <label htmlFor={`validate-${index}`} className="text-gray-700">Validate</label>
          </div>
        </div>
      ))}
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </div>
  );
};

export default CompanyBoxes;
