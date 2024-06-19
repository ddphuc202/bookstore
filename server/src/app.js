const express = require('express');

const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');

const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/books');
const genreRoutes = require('./routes/genres');
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
app.use('/genres', genreRoutes);
app.use('/articles', articleRoutes);
app.use('/customers', customerRoutes);

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/uploads/')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('image'), (req, res) => {
    res.send(req.file);
});

module.exports = app;