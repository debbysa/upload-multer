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
      // mengirim path ke field di Database
      gambar: req.files === undefined ? "" : req.files[0].path,
      foto: req.files === undefined ? "" : req.files[1].path
    }).then(newNote => {
      //mengirim kembali json
      res.json({
        status: "success",
        message: "Note added",
        data: newNote
      });
    });
  }
};
