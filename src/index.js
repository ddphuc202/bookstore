const express = require('express'); // require is a built-in function that imports the Express module
const path = require('path');
require('dotenv').config();

const app = express(); // create an instance of Express, express() is top-level func export by Express module
const port = process.env.PORT || 6969; // 3000 is common port for development
const hostname = process.env.HOSTNAME;

// Config template engine
app.set('view engine', 'ejs'); // set() is method to assign setting name to value, view engine is setting name, ejs is setting value
// current working directory is where node command is executed (terminal), relative path is resolved from this directory
app.set('views', path.join(__dirname, 'views')); // set() is method to assign setting name to value, views is setting name, ./views is setting value

// Config static files ???
app.use(express.static(path.join(__dirname, 'public')));

// 
require('./controllers/bookController')(app);

app.listen(port, () => {
    // callback function to run when the server is running
    console.log(`Server running at http://localhost:${port}`); // ${port} is a template literal, used to embed expressions, template literals are enclosed by backticks
}); // listen() binds and listens for connections on the specified host and port