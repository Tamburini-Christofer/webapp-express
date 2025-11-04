//? Importo express
const express = require("express");

//? Creo una variabile che contiene Express
const app = express();

//? Importo una porta internet
const port = 3000;

//? Importo la rotta
const movieRouter = require("./routers/movieRouter")

//? Importo errNotFound
const notFound = require("./middlewares/notFound");

//? Importo errServer
const errorServer = require("./middlewares/errorServer");

//? Importo imagePath
const imagePath = require("./middlewares/imagePath");

//? Importo CORS
const cors = require("cors");

//todo Uso CORS
app.use(cors());

//todo Middleware static 
app.use(express.static('public'));

//todo Use imagePath
app.use(imagePath);

//todo Rotta home
app.get("/api", (req, res) => {
    console.log("hai richiesto la home page");
    res.send('<h1>Home page</h1>')})

//todo Rotte
app.use("/api/movie", movieRouter)

//todo Middleware errore server
app.use(errorServer);

//todo Middleware not found
app.use(notFound);

//! Metto in ascolto il server dalla porta 3000
app.listen(port, () => {
    console.log(`Il server della porta ${port} è in ascolto`)
})