//? Importo mysql2
const mySql = require("mysql2");

//? Metodo creazione oggetto
const connection = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//todo Avvio connessione
connection.connect((err) => {
    if(err) throw err;
    console.log("Connessione con MySql!");
});

//!Esporto modulo
module.exports = connection;