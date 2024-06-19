const express = require('express');

const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');

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
// app.use(morgan('dev'));
// app.use(
//     helmet({
//         contentSecurityPolicy: false,
//         crossOriginEmbedderPolicy: false,
//     })
// );
app.use(compression());

// Config 
configViewEngine(app);
configStaticFiles(app);

// Config body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', webRoutes);
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/articles', articleRoutes);
app.use('/customers', customerRoutes);

module.exports = app;