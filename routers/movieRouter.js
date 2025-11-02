//? Framework Express
const express = require("express");

//? Controller 
const controller = require("../controllers/controller.js");

//? Server
const router = express.Router();

//todo Index
router.get("/", controller.index)

//todo Show
router.get("/:id", contoller.show)

//! Esportare il modulo
module.exports = router;