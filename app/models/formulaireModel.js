const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql-asseko999.alwaysdata.net",
  user: "asseko999",
  password: "asseko1999",
  database: "asseko999_inviter",
});

function insertInviter(nom, prenom, cotisation, cadeau, adresseMail, callback) {
  const query =
    "INSERT INTO inviter (Nom, Prenom, Cotisation, cadeau, adresseMail) VALUES (?, ?, ?, ?, ?)";
  pool.query(
    query,
    [nom, prenom, cotisation, cadeau, adresseMail],
    (erreur, resultat) => {
      callback(erreur, resultat);
    }
  );
}

module.exports = {
  insertInviter,
};
