const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(process.cwd() + "/uploads"));

app.post("/files", upload.array("photos"), (req, res) => {
  res.json({ files: req.files });
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
