require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 6969;
const hostname = process.env.HOSTNAME;

// Config 
configViewEngine(app);
configStaticFiles(app);

// Routes init
app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // ${port} is a template literal, used to embed expressions, template literals are enclosed by backticks
}); 