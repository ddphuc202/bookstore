const express = require('express');

// Import config
const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');
const configCORS = require('./config/cors');

// Import middlewares
const compression = require('compression');

// Import routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admins');
const customerRoutes = require('./routes/customers');
const categoryRoutes = require('./routes/categories');
const bookRoutes = require('./routes/books');
const postRoutes = require('./routes/posts');
const cartRoutes = require('./routes/carts');
const orderRoutes = require('./routes/orders');

// Init app
const app = express();

// Init middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Config 
configViewEngine(app);
configStaticFiles(app);
configCORS(app);

// Routes
app.use('/', authRoutes);
app.use('/admins', adminRoutes);
app.use('/customers', customerRoutes);
app.use('/categories', categoryRoutes);
app.use('/books', bookRoutes);
app.use('/posts', postRoutes);
app.use('/carts', cartRoutes);
app.use('/orders', orderRoutes);

module.exports = app;