const signInUser = require('../api/signInUser');
const express = require('express'),
    routes = express.Router();




module.exports = function(app) {

    // user signIn 
    routes.post('/api/signInUser',signInUser.signIn);
    routes.post('/api/userCount',signInUser.userCount);

    // get user count
    routes.get('/api/getUserCount',signInUser.getUserCount);

    return app.use(routes);
};