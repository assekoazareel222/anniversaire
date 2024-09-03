const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql-asseko999.alwaysdata.net",
  user: "asseko999",
  password: "asseko1999",
  database: "asseko999_inviter",
});

function insertInviter(
  nom,
  prenom,
  NumeroDeTelephone,
  Pays,
  adresseMail,
  callback
) {
  const query =
    "INSERT INTO inviter (Nom, Prenom, NumeroDeTelephone, Pays, adresseMail) VALUES (?, ?, ?, ?, ?)";

  pool.query(
    query,
    [nom, prenom, NumeroDeTelephone, Pays, adresseMail],
    (erreur, resultat) => {
      callback(erreur, resultat);
    }
  );
}

module.exports = {
  insertInviter,
};
