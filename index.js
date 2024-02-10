const express = require('express'),
config = require('./server/configure');
const path = require('path');
const env = require('./environments/environments');
const mongodb = require('./database/mongodb');
var app = express();
const https = require('https');

// ssl configuration
var fs = require('fs');
var options = {
    key: fs.readFileSync(path.resolve(__dirname, 'ssl/private.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'ssl/certificate.crt')),
    ca: fs.readFileSync(path.resolve(__dirname, 'ssl/ca_bundle.crt'))
};

/* cors error fix */
var cors = require('cors');
app.use(cors({
    origin:['http://'+env.ipAddress+':4200','http://localhost:4200','https://localhost:65507','https://localhost','http://localhost:4201','http://'+env.ipAddress+':80',]
}))
app.use((req,res,next)=>{
    setTimeout(()=>{
        next()
    },1)
})
app = config(app);


// connecting to mongodb 
mongodb.connectToServer(function(err){
    if(!err){
        console.log('mongodb successfully connected')
        const port = process.env.PORT || 443;
        const host = process.env.host || env.ipAddress || 'localhost';
        app.use(express.static(__dirname + '/dist/educator'));
        app.get('*', (req, res) => res.sendFile(path.resolve(__dirname + '/dist/educator/index.html')));
        app.listen(80, () => console.log(`App running on: http://${host}:80`));
        https.createServer(options, app).listen(port, () => console.log(`App running on: https://${host}:${port}`));
    }else{
        console.log('check mongodb connection',err)
    }
})
