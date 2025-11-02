//? Framework Express
const express = require("express");

//? Controller 
const contoller = reuire("../controllers/controller.js");

//? Server
const router = express.router();

//todo Index
router.get("/", controller.index)

//todo Show
router.get("/:id", contoller.show)

//! Esportare il modulo
module.exports = router;