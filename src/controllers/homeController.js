const homeController = {
    getIndex: (req, res) => {
        res.send('Welcome to the homepage');
    },
    getAbout: (req, res) => {
        res.render('About page');
    },
    getContact: (req, res) => {
        res.render('Contact page');
    }
};

module.exports = homeController;