const express = require("express");
const app = express();
require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");

require("./Models/db");
const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});
app.use(bodyparser.json());
app.use(cors());

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
