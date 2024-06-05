const Genre = require('../models/Genre');

// Import any necessary modules or dependencies

// Define genre controller object
const GenreController = {
    // Define controller methods here
    getAllGenres: (req, res) => {
        // Use the genre model to get all genres from the database
        Genre.getAllGenres()
            .then(genres => {
                // If the genres are retrieved successfully, send them in the response
                res.status(200).json(genres);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting genres', error: err });
            });
    },

    getGenreById: (req, res) => {
        // Get the genre ID from the request parameters
        const genreId = req.params.id;

        // Use the genre model to get a specific genre from the database
        Genre.getGenreById(genreId)
            .then(genre => {
                // If the genre is retrieved successfully, send it in the response
                res.status(200).json(genre);
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error getting genre', error: err });
            });
    },

    createGenre: (req, res) => {
        // Get the genre data from the request body
        const newGenreData = req.body;

        // Use the genre model to create a new genre in the database
        Genre.createGenre(newGenreData)
            .then(newGenreId => {
                // If the genre was created successfully, send a success response
                res.status(201).json({ message: 'Genre created successfully', id: newGenreId });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error creating genre', error: err });
            });
    },

    updateGenre: (req, res) => {
        // Get the genre ID from the request parameters
        const genreId = req.params.id;
        // Get the updated genre data from the request body
        const updatedGenreData = req.body;

        // Use the genre model to update the genre in the database
        Genre.updateGenre(genreId, updatedGenreData)
            .then(updateResult => {
                // If the genre was updated successfully, send a success response
                res.status(200).json({ message: 'Genre updated successfully', rowsAffected: updateResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error updating genre', error: err });
            });

    },

    deleteGenre: (req, res) => {
        // Get the genre ID from the request parameters
        const genreId = req.params.id;

        // Use the genre model to delete the genre from the database
        Genre.deleteGenre(genreId)
            .then(deleteResult => {
                // If the genre was deleted successfully, send a success response
                res.status(200).json({ message: 'Genre deleted successfully', rowsAffected: deleteResult });
            })
            .catch(err => {
                // If there was an error, send an error response
                res.status(500).json({ message: 'Error deleting genre', error: err });
            });
    }
};

// Export the genre controller object
module.exports = GenreController;
