const Note = require("./noteModel");

module.exports = {
  index: function(req, res) {
    Note.findAll().then(function(rows) {
      res.json(rows);
    });
  },
  store: function(req, res) {
    console.log(req.files[0].path);
    Note.create({
      judul: req.body.judul,
      isi: req.body.isi,
      gambar: req.files === undefined ? "" : req.files[0].path,
      foto: req.files === undefined ? "" : req.files[1].path
    }).then(newNote => {
      res.json({
        status: "success",
        message: "Note added",
        data: newNote
      });
    });
  }
};
