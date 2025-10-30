//? Importo express
const express = require("express");

//? Creo una variabile che contiene Express
const app = express();

//? Importo una porta internet
const port = 3000;

//! Metto in ascolto il server dalla porta 3000
app.listen(port, () => {
    console.log(`Il server della porta ${port} è in ascolto`)
})