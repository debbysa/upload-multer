// call all the required packages
const express = require("express");
const ejs = require("ejs");
const multer = require("multer");
//require database connection
require("./utils/database");
//CREATE EXPRESS APP
const app = express();
app.use(express.static(__dirname + "/public"));

app.use("/uploadmultiple", require("./api/note/noteRouter"));

// app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
//   const file = req.file;
//   if (!file) {
//     const error = new Error("Please upload a file");
//     error.httpStatusCode = 400;
//     return next(error);
//   }

//   res.sendFile(file.destination + "/" + file.filename);

//   res.send(`<img src='uploads/${file.filename}'/>`);
// });

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
