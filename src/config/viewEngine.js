const path = require('path');

// Config template engine
const configViewEngine = (app) => {
    console.log(__dirname);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
};

module.exports = configViewEngine;