const express = require('express');

const configViewEngine = require('./config/viewEngine');
const configStaticFiles = require('./config/staticFiles');

const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/books');
const genreRoutes = require('./routes/genres');
const articleRoutes = require('./routes/articles');
const customerRoutes = require('./routes/customers');

const app = express();

const cors = require('cors');
app.use(cors());

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