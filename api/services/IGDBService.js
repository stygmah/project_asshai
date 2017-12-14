const igdb = require('igdb-api-node').default;
const {IGDB_KEY} = require('./constants/keys');
const client = igdb(IGDB_KEY);



module.exports = {
    getGame: (ids)=>{
      return new Promise((resolve,reject)=>{
        client.games({ids:[ids]},['*'])
        .then((result)=>{
          resolve(result);
        })
        .catch((err)=>{
          reject(err);
        })
      });
    }
};
