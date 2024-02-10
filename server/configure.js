var path = require('path'),
    routes = require('./routes'),
    routes_api = require('./routes-api'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

module.exports = function(app) {
    app.use(morgan('dev'));
    // body parser for fetching data from body
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    routes(app);//moving the routes to routes folder.
    routes_api(app);
    //express.static(); // to load static files like .html .js .css like
    //app.use(express.static('../dist/components-collection'));
    //app.use(express.static(path.join(__dirname,'../dist/mysite')));
    app.set('view engine', 'pug');
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }
    return app;
};