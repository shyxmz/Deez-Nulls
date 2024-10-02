import React from 'react';
import adminImage from '../assets/profile-pictures/user1.gif'; // Import your image here

const AdminKnowMore = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="min-w-5xl p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col w-[10000px]">
        {/* Updated Heading with Gradient Color */}
        <h1 className="text-3xl font-bold text-center mb-6">
        💡 Know More About the <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Admin Role</span>
        </h1>
        
        {/* Flex container for Image and Text */}
        <div className="flex mb-6">
          {/* Image Box */}
          <div className="w-1/3 pr-4">
            <img
              src={adminImage} // Replace with your image source
              alt="Admin Role"
              className="mt-10 w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-2/3 flex flex-col justify-between">
            <div className="flex flex-col flex-grow">
              <p className="text-lg mb-4 py-5">
                The Admin plays a crucial role in managing and validating startups before their information is sent to the EIR (Entrepreneur in Residence) for financial grants. Here’s a detailed overview of their responsibilities:
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">

                  Key Responsibilities:
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Validate Startups:</strong> The Admin ensures that all startup applications meet the required criteria and standards before approval.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Manage Website:</strong> They are responsible for maintaining the website, ensuring it is up to date and functional for users.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Oversee Advertisements:</strong> The Admin manages advertisements on the platform to enhance visibility and attract potential investors.
                  </li>
                  <li>
                    <strong className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Monitor Website Activity:</strong> Keeping track of user activity on the website is crucial for maintaining a safe and efficient environment.
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-6">
              Importance of the Admin Role:
            </h2>
            <p className="text-lg mt-2">
              The Admin acts as a bridge between the startups and the EIR, ensuring that only the most promising ventures receive support. This role is vital for fostering innovation and facilitating the growth of startups within the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKnowMore;
