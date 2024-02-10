// custom middleware to check whether user is logged in or not
module.exports = function(req,res,next){
    
    if(req.params.userId=='rajesh'){
        console.log('perfect')
        next();
    }else{
        console.log('not match')
        res.send('invalid id');
    }

}