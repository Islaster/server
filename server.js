const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

axios.get("https://www.freetogame.com/api/games").then((res) => {
  console.log(res.data);
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
