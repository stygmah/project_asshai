const igdb = require('igdb-api-node').default;
const {IGDB_KEY} = require('./constants/keys');
const client = igdb(IGDB_KEY);



module.exports = {
    getGame: (route)=>{
      return new Promise((resolve,reject)=>{
        client.games({
          field: 'slug',
          limit:1,
          search:route
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
