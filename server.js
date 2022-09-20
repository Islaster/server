import express from "express";
const app = express();

app.use(express.json());
const port = process.env.PORT || 3001;

//route
const router = express.Router;
import fetch from "node-fetch";
const fetchCtrl = fetch("https://www.freetogame.com/api/games").then((res) =>
  res.json()
);

router.get("/", fetchCtrl);

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
