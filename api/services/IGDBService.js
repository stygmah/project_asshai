const igdb = require('igdb-api-node').default;
const {IGDB_KEY} = require('./constants/keys');
const client = igdb(IGDB_KEY);

//EXAMPLE:
//
// client.games({
//   filters: {
//       'release_dates.date-gt': '2010-12-31',
//       'release_dates.date-lt': '2012-01-01'
//   },
//   limit: 5,
//   offset: 0,
//   order: 'release_dates.date:desc',
//   search: 'zelda'
// }, [
//   'name',
//   'release_dates.date',
//   'rating',
//   'hypes',
//   'cover'
// ]).then((res)=>{
//   console.log(res);
// }).catch((e)=>{
//   console.log(e);
// })

module.exports = {
    getGames: (params)=>{
      client.games(params)
      .then((result)=>{
        Promise.resolve(result);
      })
      .catch((err)=>{
        Promise.reject(err);
      })
    },
};
