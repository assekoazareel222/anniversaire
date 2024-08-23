const mysql = require("mysql2");

const optionBd = {
  host: "mysql-asseko999.alwaysdata.net",
  user: "asseko999",
  password: "asseko1999",
  database: "asseko999_inviter",
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
