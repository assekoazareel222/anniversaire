// controller.js
const model = require("../models/formulaireModel");

// Fonction pour traiter les requêtes POST
function handleFormPost(req, res) {
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let cotisation = req.body.cotisation;
  let cadeau = req.body.cadeau;
  let adresseMail = req.body.adresseMail;

  console.log("Requête reçue:", {
    nom,
    prenom,
    cotisation,
    cadeau,
    adresseMail,
  });

  model.insertInviter(
    nom,
    prenom,
    cotisation,
    cadeau,
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
