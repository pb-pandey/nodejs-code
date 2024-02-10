
const env = require('../environments/environments');

const hostName = env.mongodbHostname;
const port = env.mongodbPort;
const dbv = env.mongodb;
const { MongoClient } = require("mongodb");
const url = `${hostName}:${port}`;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const url = `mongodb+srv://${env.userName}:${env.pass}@educator.jlf3gln.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

let dbConnection;let dbc;

module.exports = {
  connectToServer: function (callback) {
    return new Promise((resolve,reject)=>{
      client.connect(function (err, db) {
        if (err || !db) {
          reject(callback(err));
        }
        dbc = db;
        dbConnection = db.db(dbv);
  
        resolve(callback());
      });
    })
  },

  getDb:function () {
    return dbConnection;
  },

  find:function(collection_name,query,options){
    return new Promise(async (resolve)=>{
      try{

        const data = this.getDb().collection(collection_name).find(query,options);
        let dataA=[];
        await data.forEach((val)=>{
          dataA.push(val)
        });
        resolve(dataA);

      }catch(e){
        resolve('db catch error');
      }
    })
  },

  findOne:function(collection_name,query,projections={}){
    return new Promise(async (resolve,reject)=>{

      try{
        let data = await this.getDb().collection(collection_name).findOne(query,projections);
        resolve(data);

      }catch(e){
        reject('db catch error');
      }
    })
  },

  insertOne:function(collection_name,doc){
    return new Promise(async (resolve,reject)=>{

      try{

        let data = await this.getDb().collection(collection_name).insertOne(doc);
        resolve(data.insertedId);

      }catch(e){
        reject('db catch error');
      }

    })
  },

  insertMany:function(collection_name,doc,options){
    return new Promise (async (resolve,reject)=>{
      try{

        let data = await this.getDb().collection(collection_name).insertMany(doc,options);
        resolve(data.insertedCount);

      }catch(e){
        reject('db catch error')
      }
    })
  },

  updateOne: function(collection_name,filter,doc,upserted=true){
    return new Promise(async (resolve,reject)=>{

      try{

        let options = {
          upsert:upserted
        }

        /* 
          doc foramt => dont forget to add $set
          {
            $set: {
              plot: `A harvest of random numbers, such as: ${Math.random()}`
            },
          }
        */

        let data = await this.getDb().collection(collection_name).updateOne(filter,doc,options);

        let dict = {
          'matchCount':data.matchedCount,
          'updateCount':data.modifiedCount
        }
        resolve(dict);

      }catch(e){
        reject(e);
      }

    })
  },

  updateMany: function(collection_name,filter,doc,upserted=true){
    return new Promise(async (resolve,reject)=>{

      try{

        let options = {
          upsert:upserted
        }

        /* 
          doc foramt => dont forget to add $set
          {
            $set: {
              plot: `A harvest of random numbers, such as: ${Math.random()}`
            },
          }
        */

        let data = await this.getDb().collection(collection_name).updateMany(filter,doc,options);

        let dict = {
          'matchCount':data.matchedCount,
          'updateCount':data.modifiedCount
        }
        resolve(dict);

      }catch(e){
        reject('db catch error');
      }

    })
  },

  replaceOne: function(collection_name,filter,replacement,upserted=true){
    return new Promise(async (resolve,reject)=>{

      try{

        let options = {
          upsert:upserted
        }

        /* 
          replacement foramt => dont add $set because its replacement only
              plot: `A harvest of random numbers, such as: ${Math.random()}`
            },
        */

        let data = await this.getDb().collection(collection_name).replaceOne(filter,replacement,options);

        let dict = {
          'matchCount':data.matchedCount,
          'updateCount':data.modifiedCount
        }
        resolve(dict);

      }catch(e){
        reject('db catch error');
      }

    })
  },

  aggregateQ: function(collection_name,aggQueryAr){
    return new Promise(async (resolve,reject)=>{

      try{

        let data = await this.getDb().collection(collection_name).aggregate(aggQueryAr);

        resolve(data);

      }catch(e){
        reject('db catch error');
      }

    })
  },

  // updateOne: function(collection_name,_idvalue,newvalues){
  //   return new Promise((resolve,reject)=>{
  //     this.getDb().collection(collection_name).updateOne({_id:_idvalue},newvalues,{upsert:true},function(err,res){
  //       dbc.close();
  //       if(err){
  //         reject('error');
  //       }else{
  //           resolve('done');
  //       }
  //     })
  //   })
  // },

  // incNumCount: function(collection_name,_idvalue,incObject){
  //   return new Promise((resolve,reject)=>{
  //     this.getDb().collection(collection_name).updateOne({_id:_idvalue},{ $inc: {incObject:1 }},{upsert:true},function(err,res){
  //       dbc.close();
  //       if(err){
  //         reject('error');
  //       }else{
  //           resolve('done');
  //       }
  //     })
  //   })
  // },

  closeDb:function(){
    dbc.close();
  }
};
