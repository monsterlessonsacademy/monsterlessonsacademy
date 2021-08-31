const express = require("express");
const { connect } = require("./db");

const app = express();

const startServer = async () => {
  await connect("mongodb://localhost:27017/api");

  app.listen(3012, function () {
    console.log("API app started");
  });
};

startServer();
