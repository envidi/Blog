class SiteController {
    index(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
    contact(req, res) {
        res.send('contact');
    }
}
module.exports = new SiteController();
