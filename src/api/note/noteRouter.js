const express = require("express");
const router = express.Router();
const noteController = require("./noteController");
const multer = require("multer");
//untuk menambahkan path
const path = require("path");

// SET STORAGE
let fileName1;
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: function(req, file, cb) {
    cb(
      null,
      (fileName1 =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    );
  }
});

let upload = multer({ storage });

router.get("/", noteController.index);
router.post(
  "/",
  upload.array("gambar", 12),
  (req, res, next) => {
    const files = req.files;
    if (!files) {
      const error = new Error("Please choose files");
      error.httpStatusCode = 400;
      return next(error);
    }
    // console.log(req.files);
    // res.send(files);
    next();
  },
  noteController.store
);

module.exports = router;
