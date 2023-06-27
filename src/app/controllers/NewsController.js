class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('newsdetail');
    }
}
module.exports = new NewsController();
