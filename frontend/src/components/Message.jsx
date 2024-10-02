import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageSystem = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [messageContent, setMessageContent] = useState('');

  const fetchMessages = async () => {
    const response = await axios.get('/messages');
    setMessages(response.data);
  };

  const sendMessage = async () => {
    if (messageContent.trim() !== '') {
      await axios.post('/messages/send', { senderId: userId, content: messageContent });
      setMessageContent('');
      fetchMessages(); // Fetch messages again after sending
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <div>
        {messages.map((msg) => (
          <div key={msg._id}>
            <strong>{msg.sender.name}:</strong> {msg.content} <em>{new Date(msg.createdAt).toLocaleString()}</em>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MessageSystem;