const express = require('express');

const compression = require('compression');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');
const configBodyParser = require('./config/bodyParser');

const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/books');
const categoryRoutes = require('./routes/categories');
const articleRoutes = require('./routes/articles');
const customerRoutes = require('./routes/customers');

const app = express();

// CORS (cross-origin resource sharing) allows the server to accept requests from another domain
const cors = require('cors');
app.use(cors());

// Init middlewares
app.use(compression());

// Config 
configViewEngine(app);
configStaticFiles(app);
configBodyParser(app);

// Routes
app.use('/', webRoutes);
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/articles', articleRoutes);
app.use('/customers', customerRoutes);

module.exports = app;