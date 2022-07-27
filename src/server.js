const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (_, res) => {
  res.send("API is UP");
});

app.get("/features", (_, res) => {
  res.send(["aboutPage"]);
});

app.listen(3001, () => {
  console.log("started server");
});
