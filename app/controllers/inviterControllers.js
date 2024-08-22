const inviterModel = require("../models/inviterModel");

const getInviters = (req, res, next) => {
  inviterModel.getInviters((erreur, resultat) => {
    if (erreur) {
      console.error(erreur);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.status(200).send({ resultat });
  });
};

module.exports = { getInviters };
