const model = require("../models/formulaireModel");

// Fonction pour traiter les requêtes POST
function handleFormPost(req, res) {
  const { nom, prenom, NumeroDeTelephone, Pays, adresseMail } = req.body;

  console.log("Requête reçue:", {
    nom,
    prenom,
    NumeroDeTelephone,
    Pays,
    adresseMail,
  });

  model.insertInviter(
    nom,
    prenom,
    NumeroDeTelephone,
    Pays,
    adresseMail,
    (erreur, resultat) => {
      if (erreur) {
        console.log("Erreur de requête:", erreur);
        return res.status(500).send({
          error: "Erreur lors de l'insertion dans la base de données",
        });
      } else {
        console.log("Insertion réussie:", resultat);
        return res.redirect("/");
      }
    }
  );
}

module.exports = {
  handleFormPost,
};
