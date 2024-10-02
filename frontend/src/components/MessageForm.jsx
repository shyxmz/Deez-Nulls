import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Importing toast for notifications
import "react-toastify/dist/ReactToastify.css";

const MessageForm = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      toast.error("Message content is required"); // Notify if content is empty
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/messages/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      const result = await response.json();
      if (result.success) {
        setContent(""); // Clear the input after successful message send
        toast.success("Message sent successfully!"); // Show success notification

        // Redirect to admin landing page after 2 seconds
        setTimeout(() => {
          navigate('/adminlanding'); // Redirect to the admin landing page
        }, 2000);
      } else {
        toast.error(result.message); // Display error message from the server
      }
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Error sending message. Please try again.");
    }
  };

  return (
    <section className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-orange-300 to-red-400 backdrop-blur-lg bg-opacity-70 flex rounded-2xl shadow-lg w-[70%] h-[70%] p-5 items-center mx-auto">
        <div className="min-w-md mx-auto w-[50%] h-[50%] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Send a Message</h2>
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
              className="w-full bg-[#002D74] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default MessageForm;
