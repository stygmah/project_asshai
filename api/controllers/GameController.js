/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const async = require('async');
const _ = require('lodash');
const gameSchema = require('../models/Game');
const consoleSchema = require('../models/Console');
const client = require('../services/DBService.js');
const IGDB = require('../services/IGDBService');

module.exports = {
  /*********GET SINGLE GAME**********/
  /* Takes a slug and id (for saving)
  /*********************************/
  getSingleGame: (req,res)=>{
    if(!req.body.route) return res.status(400).send('Error to edit');
    var route = req.body.route;
    var id = req.body.id;
    var Game = client.model('Game',gameSchema);
    Game.findOne({slug: route}, function(err,response){
      //Find Game in local database
      if(err){
        return res.status(500).send(err);
      }else{
        if(response){
          //MAIN SUCCESS CASE
          transformGame(response);
          return res.status(200).send(response);
        }else{
          //if game not found, search in igdb
          IGDB.getGame(id).then((result)=>{
            var game = result.body[0];
            if(result && result.body){
              //if game is found it saves on local and sends request parallel
              console.log('GAME FROM SOURCE:',game.name);
              Game.create(game, (errorSave,doc)=>{
                if(errorSave){
                  console.log('There was an error when saving '+game.name+": "+errorSave);
                }else{

                  //TODO: Function to populate

                  console.log(game.name+' Saved succesfully\n');
                }
              });
              //paralel, original IGDB doc sent
              return res.status(200).send(game);
            }else{
              return res.status(404).send();
            }
          })
          .catch((error)=>{
            return res.status(500).send(err);
          })
        }
      }
    });
  },
  /********************/




  /**********SEARCH FOR A GAME*********/
  /*
  /************************************/
  searchGame:(req,res)=>{
    var search = req.body;
    if(!req.body.term) req.send('EMPTY SEARCH TO EDIT');



    IGDB.searchGame(search.term, search.page, search.limit, search.order, search.elements).then((result)=>{
      res.status(200).send(result);
    })
    .catch((err)=>{
      res.status(500).send(err);
    });
  }
  /********************/
};





var transformGame = (game)=>{
    //add consoles
    //add companies
}

var addConsoles = (game)=>{
  var Console = client.model('Console',consoleSchema);
  var consoles;

  if(game.consoles){
    consoles = game.consoles;
  }else{
    consoles = game.release_dates.map((obj)=>{
      if(!_.includes(consoles, obj.platform)){
        return obj.platform;
      }
    });
  }

  //Update consoles to Object IDs
  Console.find({id: consoles},(err,res)=>{
    if(err){
      console.log('Error finding consoles: '+err);
    }else{
      if(!res){
        console.log('No consoles found');
      }else{
        //map consoles and retrieve ids
        console.log(res);
        var console_ids = [];



      }
    }
  });
}

addConsoles({
  "_id": "5a3aa10373a2770c759a1503",
  "id": 1877,
  "name": "Cyberpunk 2077",
  "slug": "cyberpunk-2077",
  "url": "https://www.igdb.com/games/cyberpunk-2077",
  "created_at": "2013-01-12T22:44:46.410Z",
  "updated_at": "2017-12-19T19:22:48.641Z",
  "summary": "The upcoming RPG from CD Projekt RED, creators of The Witcher series of games, based on the Cyberpunk 2020 tabletop RPG created by Mike Pondsmith.",
  "franchise": 451,
  "hypes": 253,
  "category": 0,
  "first_release_date": "2019-12-31T00:00:00.000Z",
  "cover": {
      "url": "//images.igdb.com/igdb/image/upload/t_thumb/rrroofmmjqgvgmfxwewd.jpg",
      "cloudinary_id": "rrroofmmjqgvgmfxwewd",
      "width": 380,
      "height": 540
  },
  "esrb": {
      "rating": 1
  },
  "__v": 0,
  "games": [
      26766,
      25300,
      11567,
      54842,
      36950,
      24048,
      427,
      19301,
      27920,
      23212
  ],
  "bundles": [],
  "standalone_expansions": [],
  "expansions": [],
  "dlcs": [],
  "tags": [
      18,
      33,
      38,
      268435468,
      536871015,
      536871018,
      536871033,
      536871882,
      536871938,
      536872371,
      536875054,
      536875562,
      536876301,
      536876391,
      536882208
  ],
  "websites": [
      {
          "category": 9,
          "url": "https://www.youtube.com/user/CyberPunkGame"
      },
      {
          "category": 5,
          "url": "https://twitter.com/CyberpunkGame"
      },
      {
          "category": 4,
          "url": "https://www.facebook.com/CyberpunkGame"
      },
      {
          "category": 3,
          "url": "https://en.wikipedia.org/wiki/Cyberpunk_2077"
      },
      {
          "category": 1,
          "url": "http://cyberpunk.net/"
      }
  ],
  "videos": [
      {
          "name": "Teaser",
          "video_id": "6eS7CX5zkj0"
      }
  ],
  "screenshots": [
      {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/yesnrawyww0jemvxzyws.jpg",
          "cloudinary_id": "yesnrawyww0jemvxzyws",
          "width": 1919,
          "height": 1200
      },
      {
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/npnxwd6mc4dvizz7werh.jpg",
          "cloudinary_id": "npnxwd6mc4dvizz7werh",
          "width": 1919,
          "height": 1200
      }
  ],
  "alternative_names": [],
  "release_dates": [
      {
          "category": 2,
          "platform": 6,
          "date": 1577750400000,
          "human": "2019",
          "y": 2019,
          "m": 12
      }
  ],
  "genres": [
      12
  ],
  "themes": [
      18,
      33,
      38
  ],
  "keywords": [
      103,
      106,
      121,
      970,
      1026,
      1459,
      4142,
      4650,
      5389,
      5479,
      11296
  ],
  "game_modes": [
      1,
      2
  ],
  "player_prespectives": [],
  "game_engines": [
      24
  ],
  "publishers": [
      908
  ],
  "developers": [
      908
  ]
})
