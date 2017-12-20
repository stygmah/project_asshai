const igdb = require('igdb-api-node').default;
const {IGDB_KEY} = require('./constants/keys');
const client = igdb(IGDB_KEY);



module.exports = {
    getGame: (id)=>{
      return new Promise((resolve,reject)=>{
        client.games({
          ids: [id]
        },['*'])
        .then((result)=>{
          resolve(result);
        })
        .catch((err)=>{
          reject(err);
        })
      });
    },
    searchGame: (params,page,limit)=>{
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
