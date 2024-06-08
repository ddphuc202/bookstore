const express = require('express');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');

const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/books');
const genreRoutes = require('./routes/genres');
const postRoutes = require('./routes/posts');
const postCategoryRoutes = require('./routes/post_categories');

const app = express();

const cors = require('cors');
app.use(cors());

// Config 
configViewEngine(app);
configStaticFiles(app);

// Config body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', webRoutes);
app.use('/books', bookRoutes);
app.use('/genres', genreRoutes);
app.use('/posts', postRoutes);
app.use('/post-categories', postCategoryRoutes);

module.exports = app;