const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  const response = await axios.get("http://backend:3000");
  res.send(`<h1>${response.data}</h1>`);
});

app.listen(3000, () => {
  console.log("Frontend running");
});
