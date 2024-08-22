const mysql = require("mysql");

const optionBd = {
  host: "localhost",
  user: "root",
  password: "",
  port: 6000,
  database: "anniv",
};

const pool = mysql.createPool(optionBd);

const getInviters = (callback) => {
  pool.query("SELECT * FROM inviter", (erreur, resultat) => {
    if (erreur) {
      return callback(erreur, null);
    }
    callback(null, resultat);
  });
};

module.exports = { getInviters };
