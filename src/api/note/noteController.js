const Note = require("./noteModel");

module.exports = {
  index: function(req, res) {
    Note.findAll().then(function(rows) {
      res.json(rows);
    });
  },
  store: function(req, res) {
    Note.create(req.body).then(function(row) {
      res.json(row);
    });
  }
};
