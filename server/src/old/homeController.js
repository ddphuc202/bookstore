const homeController = {
    getIndex: (req, res) => {
        return res.render('home.ejs');
    },
    getAbout: (req, res) => {
        res.render('About page');
    },
    getContact: (req, res) => {
        res.render('Contact page');
    }
};

module.exports = homeController;