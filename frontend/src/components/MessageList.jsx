import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080"); // Ensure your backend is running at this address

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Fetch initial messages
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/messages", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Corrected Authorization header format
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const result = await response.json();
        if (result.success) {
          setMessages(result.data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    // Listen for new messages via Socket.IO
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [message, ...prevMessages]);
      setNotification("New message received!");
      setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
    });

    // Clean up on component unmount
    return () => {
      socket.off("newMessage");
    };
  }, []);

  // Function to remove a message from the UI
  const handleRemoveMessage = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg._id !== messageId)
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {notification && (
        <div className="mb-4 bg-green-500 text-white text-center py-2 rounded-lg">
          {notification}
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Messages
      </h2>
      <ul className="space-y-4">
        {messages.map((message) => (
          <li
            key={message._id}
            className="bg-gray-100 p-4 rounded-lg shadow-md relative"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">
                {message.sender.name}:
              </span>
              <span className="text-sm text-gray-500">
                {new Date(message.createdAt).toLocaleString()}
              </span>
              {/* Close button to remove message */}
              <button
                onClick={() => handleRemoveMessage(message._id)}
                className="text-red-500 hover:text-red-700 absolute top-2 right-2"
              >
                &times;
              </button>
            </div>
            <p className="mt-2 text-gray-800">{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
