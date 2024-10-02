import React from 'react';
import eirImage from '../assets/profile-pictures/user3.gif'; // Import your image here

const EIRsKnowMore = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="min-w-5xl p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col w-[10000px]">
        {/* Updated Heading with Gradient Color */}
        <h1 className="text-3xl font-bold text-center mb-6">
          📈 Know More About the <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">EIR Role</span>
        </h1>
        
        {/* Flex container for Image and Text */}
        <div className="flex mb-6">
          {/* Image Box */}
          <div className="w-1/3 pr-4">
            <img
              src={eirImage} // Replace with your image source
              alt="EIR Role"
              className="mt-16 w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-2/3 flex flex-col justify-between">
            <div className="flex flex-col flex-grow">
              <p className="text-lg mb-4 py-5">
                EIRs play a crucial role in guiding and supporting startups within the ecosystem. They have access to essential information that enables them to evaluate and assist startups effectively. Here’s a detailed overview of their capabilities:
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Key Responsibilities for EIRs:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Manage KYC Information:</strong> EIRs have access to all startups' KYC information, ensuring compliance and eligibility for funding and support.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Scheme Information:</strong> They oversee various schemes available to startups, helping them navigate funding opportunities and other resources.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Track Startup Progress:</strong> EIRs can track the progress of different startups, providing insights and guidance to enhance their development.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Offer Strategic Guidance:</strong> EIRs mentor startups, offering strategic advice to help them achieve their goals and succeed in the market.
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-6">
              Importance of EIRs in the Ecosystem:
            </h2>
            <p className="text-lg mt-2">
              EIRs are instrumental in fostering innovation and ensuring that startups receive the support they need to thrive. By leveraging their expertise and networks, they facilitate the growth of emerging ventures and contribute to a dynamic entrepreneurial landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EIRsKnowMore;
