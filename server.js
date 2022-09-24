const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
require("./config/database");

app.use(express.json());
app.use(cors());
app.use(require("./routes/User"));

axios.get("https://www.freetogame.com/api/games").then((res) => {
  const html = res.data;
  app.get("/data", (req, res) => {
    res.json(html);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
