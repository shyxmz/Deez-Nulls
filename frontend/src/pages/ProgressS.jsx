import React from "react";
import yourImage from "../assets/profile-pictures/Progress1.jpg"; // replace with your actual image path

function ImageBox() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-[80%] h-[80%] bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:border-4 hover:border-orange-500 transition-all duration-300">
        <img src={yourImage} alt="Description of the image" className="object-cover w-full h-full" />
      </div>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </div>
  );
}

export default ImageBox;
