const express = require("express");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const http = require("http");
const socketIO = require("socket.io");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

 
const AuthRouter = require("./Routes/AuthRouter");
const kycRoutes = require("./Routes/KycRoutes");
const messageRoutes = require("./Routes/messageRoutes");  

require("./Models/db");  


const app = express();
const server = http.createServer(app);  
const io = socketIO(server, {
  cors: {
    origin: "*",  
  },
});

 
app.use(bodyparser.json());
app.use(cors());
app.use(session({
  store: new FileStore({ path: './sessions' }),   
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }   
}));
 
app.use((req, res, next) => {
  req.io = io;
  next();
});
 
app.use("/auth", AuthRouter);
app.use("/api", kycRoutes);
app.use("/api/messages", messageRoutes);  

app.get("/ping", (req, res) => {
  res.send("PONG");
});

 
io.on("connection", (socket) => {
  console.log("A user connected: ", socket.id);

  
  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

 
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});