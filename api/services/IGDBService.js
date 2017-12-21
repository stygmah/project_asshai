const igdb = require('igdb-api-node').default;
const {IGDB_KEY} = require('./constants/keys');
const expansions =  require('./constants/IGDB_Defaults').expanders;
const fields =  require('./constants/IGDB_Defaults').fields;
const client = igdb(IGDB_KEY);

var defaultParameters = {
  limit: 10,
}

module.exports = {
    /*******************
     *  GET GAME
     *
     *
     *
    ********************/
    getGame: (id)=>{
      return new Promise((resolve,reject)=>{
        client.games({
          ids: [id],
          expand: expansions
        },fields)
        .then((result)=>{
          resolve(result);
        })
        .catch((err)=>{
          reject(err);
        })
      });
    },

    /*******************
     *  SEARCH GAME
     *
     *
     *
    ********************/
    searchGame: (search, page = 0, limit=defaultParameters.limit , order, elements)=>{
      var searchParameters = {
        search: search,
        limit: limit,
        offset: page,
      };
      if (order) searchParameters.order = order;
      if (!elements) elements = '*';


      return new Promise((resolve,reject)=>{
        client.games(searchParameters,[elements])
        .then((result)=>{
          resolve(result);
        })
        .catch((err)=>{
          reject(err);
        })
      });
    }
    /*******************
     *
     *
     *
     *
    ********************/
};
