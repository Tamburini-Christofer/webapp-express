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

    const id = parseInt(req.params.id)

    const movieSql = 'SELECT * FROM movies WHERE id = ?';

    const reviewsSql = `
    SELECT *
    FROM reviews    
    WHERE movie_id = ?
    `;

    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (movieResults.length === 0) return res.status(404).json({ error: 'Movie not found' });

        const movie = movieResults[0];

        movie.image = req.imagePath + movie.image

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            movie.reviews = reviewsResults;
            res.json(movie);
        });
    });

}

module.exports = { index, show }