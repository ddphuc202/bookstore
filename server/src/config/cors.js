const cors = require('cors');

module.exports = (app) => {
    // CORS (cross-origin resource sharing) allows the server to accept requests from another domain
    app.use(cors());
}