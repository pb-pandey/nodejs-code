const util = require('../util/imp-func');
// var sleep = require('system-sleep');
method = {};
const mongodb = require('../database/mongodb');
method.signIn = function(req,res){
    console.log('hello')
    try{

        mongodb.insertOne('userSignIn',req.body)
        .then(data=>{
          res.status(200).send('done');
        })
        .catch(error=>{
          res.status(400).send(error);
        })
    
      }catch(e){
        res.status(400).send(e);
      }
}

method.userCount = function(req,res){
  try{

    mongodb.updateOne('userSignIn',{_id:'userCount'},{$inc:{"currentCount":1}})
    .then(data=>{
      res.status(200).send('done');
    })
    .catch(error=>{
      res.status(400).send(error);
    })

  }catch(e){
    res.status(400).send(e);
  }
}

method.getUserCount = function(req,res){
  try{

    mongodb.findOne('userSignIn',{_id:'userCount'})
    .then(data=>{
      res.status(200).send(data);
    })
    .catch(error=>{
      res.status(400).send(error);
    })

  }catch(e){
    res.status(400).send(e);
  }
}


module.exports = method;