const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "/uploads"));

app.post("/avatar", upload.single("avatar"), function (req, res, next) {
  console.log("file", req.file);
  console.log("body", req.body.profileName);
  res.json({ path: "/" + req.file.filename });
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
