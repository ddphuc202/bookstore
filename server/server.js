require('dotenv').config();
const app = require('./src/app');

const port = process.env.PORT || 3030;
const hostname = process.env.HOSTNAME;

const server = app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

process.on('SIGINT', () => {
    console.log('Server closing...');
    server.close();
});
