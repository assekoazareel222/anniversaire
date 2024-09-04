const express = require("express");
const connection = require("express-myconnection");
const mysql = require("mysql2");
const app = express();
const port = 5100;
const path = require("path");
const bodyParser = require("body-parser");
const controller = require("./app/controllers/formulaireControllers");
// Connexion à la base de données (peut être déplacée dans le modèle si nécessaire)
const optionBd = {
  host: "mysql-asseko999.alwaysdata.net",
  user: "asseko999",
  password: "asseko1999",
  database: "asseko999_inviter",
};

app.use(connection(mysql, optionBd, "pool"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Configurer le moteur de templates comme étant EJS
app.set("view engine", "ejs");

// Spécifier le dossier où les vues sont stockées
app.set("views", path.join(__dirname, "app", "views"));

// Routes
const indexRouter = require("./routes/index");
// app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`ASSEKO a lancé ${port}`);
});

app.post("/", controller.handleFormPost);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    root: path.join(__dirname, "app/views"),
  });
  const ExcelJS = require("exceljs");
  const mysql = require("mysql2");

  // Configuration de la connexion à la base de données
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql-asseko999.alwaysdata.net",
    user: "asseko999",
    password: "asseko1999",
    database: "asseko999_inviter",
  });

  // Fonction pour exporter les données depuis la base de données vers un fichier Excel
  async function exportToExcel() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Invités");

    // Ajouter les colonnes
    worksheet.columns = [
      { header: "Nom", key: "Nom", width: 30 },
      { header: "Prénom", key: "Prenom", width: 30 },
      { header: "Numéro de Téléphone", key: "NumeroDeTelephone", width: 20 },
      { header: "Pays", key: "Pays", width: 20 },
      { header: "Adresse Email", key: "AdresseMail", width: 30 },
    ];

    // Requête pour récupérer les données depuis la base de données
    pool.query(
      "SELECT Nom, Prenom, NumeroDeTelephone, Pays, AdresseMail FROM inviter",
      (err, rows) => {
        if (err) {
          console.error("Erreur lors de la récupération des données:", err);
          return;
        }

        // Ajouter les lignes récupérées au fichier Excel
        rows.forEach((row) => {
          worksheet.addRow(row);
        });

        // Enregistrer le fichier Excel
        workbook.xlsx
          .writeFile("invites.xlsx")
          .then(() => {
            console.log("Fichier Excel créé avec succès!");
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la création du fichier Excel:",
              error
            );
          });
      }
    );
  }

  // Appeler la fonction pour exporter les données
  exportToExcel();
});
