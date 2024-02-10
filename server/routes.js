var express = require('express'),
    router = express.Router(),
    path = require('path'),
    home = require('../controllers/home'),
    image = require('../controllers/image');

module.exports = function(app) {
    router.get('/images/:image_id', image.index);
    router.get('/images/:image_id/like', image.like);
    router.post('/images', image.create);
    //router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);
    //router.get('*', home.index);
    app.use(router);
};