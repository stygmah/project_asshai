const igdb = require('igdb-api-node').default;
const {IGDB_KEY} = require('./constants/keys');
const client = igdb(IGDB_KEY);



module.exports = {
    getGame: (params)=>{
      return new Promise((resolve,reject)=>{
        client.games(params)
        .then((result)=>{
          resolve(result);
        })
        .catch((err)=>{
          reject(err);
        })
      });
    }
};
