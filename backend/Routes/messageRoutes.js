const express = require("express");
const { sendMessage, getMessages } = require("../Controller/messageController");
const {
  authenticateUser,
  authorizeAdmin,
} = require("../Middlewares/authMiddleware");

const router = express.Router();

router.get("/messages", authenticateUser, getMessages);

router.post("/messages", authenticateUser, authorizeAdmin, sendMessage);

module.exports = router;