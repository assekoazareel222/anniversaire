const express = require("express");
const router = express.Router();
const inviterController = require("../app/controllers/inviterControllers");

router.get("/", inviterController.getInviters);

module.exports = router;
