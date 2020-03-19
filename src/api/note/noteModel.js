const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");

const note = sequelize.define(
  "note",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    judul: {
      type: Sequelize.STRING(255)
    },
    isi: {
      type: Sequelize.STRING(255)
    },
    gambar: {
      type: Sequelize.STRING(300)
    },
    foto: {
      type: Sequelize.STRING(300)
    }
  },
  { timestamps: false, tableName: "note" }
);

module.exports = note;
