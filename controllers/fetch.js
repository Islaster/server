import fetch from "node-fetch";

module.exports = fetch("https://www.freetogame.com/api/games")
  .then((res) => res.json())
  .then((json) => console.log(json));
