const Sequelize = require("sequelize");

const sequelize = new Sequelize("note_crud", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("koneksi ke note_crud berhasil");
  })
  .catch(err => {
    console.log("error: ", err);
  });

module.exports = sequelize;
