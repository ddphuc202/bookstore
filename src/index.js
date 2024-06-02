const express = require('express'); // require is a built-in function that imports the Express module
require('dotenv').config();

const app = express(); // create an instance of Express, express() is top-level func export by Express module
const port = process.env.PORT || 6969; // 3000 is common port for development
const hostname = process.env.HOSTNAME;

// config template engine
app.set('view engine', 'ejs'); // set() is method to assign setting name to value, view engine is setting name, ejs is setting value
// current working directory is where node command is executed (terminal), relative path is resolved from this directory
app.set('views', './src/views'); // set() is method to assign setting name to value, views is setting name, ./views is setting value

app.get('/', (req, res) => {
    // anonymous function with req and res parameters (use anonymous because we don't need to reuse the function)
    res.send('Hello World!'); // send() is method to send response to the client
}); // app.get() is method to handle GET requests, '/' is the URL path, req is the request object, res is the response object

// route to render sample.ejs file in views folder
app.get('/sample', (req, res) => {
    res.render('sample'); // render() is method to render a view and send the rendered HTML string to the client
});

app.listen(port, () => {
    // callback function to run when the server is running
    console.log(`Server running at http://localhost:${port}`); // ${port} is a template literal, used to embed expressions, template literals are enclosed by backticks
}); // listen() binds and listens for connections on the specified host and port
