const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/locales", express.static("locales"));
app.use("/locales", express.static(path.join(__dirname, "locales")));
app.listen(3005);
