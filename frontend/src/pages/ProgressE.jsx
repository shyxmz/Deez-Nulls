import React from "react";
import image1 from "../assets/profile-pictures/Progress1.jpg"; // Replace with actual image paths
import image2 from "../assets/profile-pictures/Progress2.jpg";
import image3 from "../assets/profile-pictures/Progress3.jpg";

function ImageBox() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 space-y-8">
      {/* First Image Box */}
      <div className="w-[90%] h-[90%] bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:border-4 hover:border-orange-500 transition-all duration-300">
        <img src={image1} alt="Description of the image" className="object-cover w-full h-full" />
      </div>
      {/* Second Image Box */}
      <div className="w-[90%] h-[90%] bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:border-4 hover:border-orange-500 transition-all duration-300">
        <img src={image2} alt="Description of the image" className="object-cover w-full h-full" />
      </div>
      {/* Third Image Box */}
      <div className="w-[90%] h-[90%] bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:border-4 hover:border-orange-500 transition-all duration-300">
        <img src={image3} alt="Description of the image" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}

export default ImageBox;
