/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const gameSchema = require('../models/Game');
const consoleSchema = require('../models/Console');
const client = require('../services/DBService.js');
const IGDB = require('../services/IGDBService');

module.exports = {
  getSingleGame: (req,res)=>{
    if(!req.body.route) return res.status(400).send('Error to edit');
    var route = req.body.route;
    var Game = client.model('Game',gameSchema);
    Game.findOne({slug: route}, function(err,response){
      //Find Game in local database
      if(err){
        return res.status(500).send(err);
      }else{
        if(response){
          return res.status(200).send(response);
        }else{
          //if game not found, search in igdb
          IGDB.getGame(route).then((result)=>{
            var game = result.body[0];
            if(result && result.body){
              //if game is found it saves on local and sends request parallel
              console.log('GAME FROM SOURCE:',game.name);
              Game.create(game, (errorSave,doc)=>{
                if(errorSave){
                  console.log('There was an error when saving '+game.name+": "+errorSave);
                }else{
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
  searchGame:(req,res)=>{
  }
};

var transformGame = (id)=>{
  Game.findOne({id:id},(err,res)=>{
    
  });
}