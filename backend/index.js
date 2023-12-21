const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use("/locales", express.static(path.join(__dirname, "locales")));
app.listen(3005);
