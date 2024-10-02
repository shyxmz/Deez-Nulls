import React from 'react';
import startupImage from '../assets/profile-pictures/user2.gif'; // Import your image here

const StartupsKnowMore = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="min-w-5xl p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col w-[10000px]">
        {/* Updated Heading with Gradient Color */}
        <h1 className="text-3xl font-bold text-center mb-6">
          🚀 Know More About the <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Startups Role</span>
        </h1>
        
        {/* Flex container for Image and Text */}
        <div className="flex mb-6">
          {/* Image Box */}
          <div className="w-1/3 pr-4">
            <img
              src={startupImage} // Replace with your image source
              alt="Startups Role"
              className="mt-12 w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-2/3 flex flex-col justify-between">
            <div className="flex flex-col flex-grow">
              <p className="text-lg mb-4 py-5">
                Startups play a vital role in the ecosystem, and they have the opportunity to manage their applications and receive essential updates. Here’s a detailed overview of their capabilities:
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Key Features for Startups:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Access Progress:</strong> Startups can monitor the progress of their applications, ensuring transparency in the validation process.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">View Monthly Reports:</strong> Startups receive monthly reports detailing their performance and areas for improvement.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Selection Status for Funds:</strong> They can track their selection status for potential funding, allowing them to plan their strategies accordingly.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Receive Information from EIRs:</strong> Startups will get essential information and guidance from the Entrepreneurs in Residence (EIRs) to support their growth.
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-6">
              Importance of Startups in the Ecosystem:
            </h2>
            <p className="text-lg mt-2">
              Startups are the backbone of innovation, driving growth and creating new opportunities. By leveraging available resources and support from the ecosystem, they can scale their ideas and contribute significantly to economic development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupsKnowMore;
