require('dotenv').config();
const express = require('express');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');

const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/books');
const postRoutes = require('./routes/posts');
const postCategoryRoutes = require('./routes/post_categories');

const app = express();
const port = process.env.PORT || 6969;
const hostname = process.env.HOSTNAME;

// Config 
configViewEngine(app);
configStaticFiles(app);

// Config body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', webRoutes);
app.use('/books', bookRoutes);
app.use('/posts', postRoutes);
app.use('/post-categories', postCategoryRoutes);

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`); // ${port} is a template literal, used to embed expressions, template literals are enclosed by backticks
}); 