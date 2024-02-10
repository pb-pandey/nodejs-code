var express = require('express'),
    app = express();
    

module.exports = {

    isLoggedin:function(req,res){
        console.log('worked')
        res.send(req+'data')
    }

}