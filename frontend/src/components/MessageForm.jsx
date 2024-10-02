import React, { useState } from "react";

const MessageForm = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log(token);

      // Ensure that the token is used correctly in the Authorization header
      const response = await fetch("http://localhost:8080/api/messages/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Corrected the Authorization header with template literals
        },
        body: JSON.stringify({ content }),
      });

      const result = await response.json();
      if (result.success) {
        setContent(""); // Clear the input after successful message send
        alert("Message sent successfully!");
      } else {
        alert(result.message); // Display error message from the server
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Send a Message
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
