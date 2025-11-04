//? Importo database
const connection = require('../data/data_base');

//todo index
function index(req, res) {
    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })
        res.json(movies);
    });
}

//todo Show
function show(req, res) {
  const id = parseInt(req.params.id);
  const movieSql = "SELECT * FROM movies WHERE id = ?";
  const reviewSql = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(movieSql, [id], (err, movieResults) => {
    if (err) return res.status(500).json({ error: "Errore query movie" });
    if (movieResults.length === 0) return res.status(404).json({ error: "Film non trovato" });

    const movie = { ...movieResults[0] };
    movie.image = req.imagePath + movie.image;

    connection.query(reviewSql, [id], (err, reviewResults) => {
      if (err) return res.status(500).json({ error: "Errore query recensioni" });
      movie.reviews = reviewResults;
      res.json(movie);
    });
  });
}

module.exports = { index, show }