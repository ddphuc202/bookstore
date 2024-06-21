const express = require('express');

const compression = require('compression');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');
const configBodyParser = require('./config/bodyParser');
const configCORS = require('./config/cors');

const webRoutes = require('./routes/web');
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');
const categoryRoutes = require('./routes/categories');
const bookRoutes = require('./routes/books');
const postRoutes = require('./routes/posts');

const app = express();

const session = require('express-session');
app.use(session({
    secret: 'bookstore',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Init middlewares
app.use(compression());

// Config 
configViewEngine(app);
configStaticFiles(app);
configBodyParser(app);
configCORS(app);

// Routes
app.use('/', webRoutes);
app.use('/auth', authRoutes)
app.use('/customers', customerRoutes);
app.use('/categories', categoryRoutes);
app.use('/books', bookRoutes);
app.use('/posts', postRoutes);

module.exports = app;