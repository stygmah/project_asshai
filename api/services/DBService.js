var mongoose = require('mongoose');
var {dbKey,dbUser} = require('./constants/keys.js');

var password = dbKey;
var user = dbUser;

var client = mongoose.connect("mongodb://"+ user +":"+ password +"@ds135866.mlab.com:35866/project_asshai",(err,db)=>{
                    if(err)throw err;
                });

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open');

});
module.exports = client;
