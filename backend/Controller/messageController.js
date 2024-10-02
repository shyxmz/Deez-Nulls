const MessageModel = require("../Models/Message");

 
const sendMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const sender = req.user._id;  
    const newMessage = new MessageModel({ sender, content });

    await newMessage.save();

    req.io.emit("newMessage", newMessage);

    res.status(201).json({ success: true, message: "Message sent successfully", data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};


const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find().populate("sender", "name email"); // Populating sender details
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to retrieve messages" });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};