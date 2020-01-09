// call all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const multer = require("multer");
const path = require("path");
//CREATE EXPRESS APP
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static("public2"));

// SET STORAGE
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

var upload = multer({ storage });

app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  // res.sendFile(file.destination + "/" + file.filename);

  res.send(`<img src='uploads/${file.filename}'/>`);
});

// Uploading multiple files
app.post("/uploadmultiple", upload.array("myFiles", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(files);
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
