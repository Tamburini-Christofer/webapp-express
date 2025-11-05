//? Framework Express
const express = require("express");

//? Controller 
const controller = require("../controllers/controller.js");

//? Server
const router = express.Router();

//todo Index
router.get("/", controller.index)

//todo Show
router.get("/:id", controller.show)

//todo Store
router.post("/:id/review", controller.store)

//! Esportare il modulo
module.exports = router;