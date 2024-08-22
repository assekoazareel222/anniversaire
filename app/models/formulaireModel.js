const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  port: 6000,
  database: "anniv",
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
