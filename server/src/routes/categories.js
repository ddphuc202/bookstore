const express = require('express');
const GenreController = require('../controllers/GenreController');

const router = express.Router();

// GET all genres
router.get('/', GenreController.getAllGenres);

// GET a specific genre
router.get('/:id', GenreController.getGenreById);

// POST a new genre
router.post('/', GenreController.createGenre);

// PUT/update a genre
router.put('/:id', GenreController.updateGenre);

// DELETE a genre
router.delete('/:id', GenreController.deleteGenre);

module.exports = router;
