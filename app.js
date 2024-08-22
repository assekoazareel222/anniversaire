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
  host: "mysql-asseko222.alwaysdata.net",
  user: " asseko222_invite",
  password: "asseko1999",
  database: "asseko_inviter",
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
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`ASSEKO a lancé ${port}`);
});
app.post("/form", controller.handleFormPost);
