const jwt = require("jsonwebtoken");
const env = require('../environments/environments');
module.exports = function(req,res,next){
    let userId = req.params.userId || req.body.userId;
    let bearerToken = req.header('Authorization').split(' ')[1];
    if(jwt.verify(bearerToken,env.jwtKey)){
        console.log('perfect')
        next();
    }else{
        console.log('not match')
        res.status(409).send('invalid token');
    }

}