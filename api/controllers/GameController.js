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
    if(!req.body.id) return res.status(400).send('Error to edit');
    var id = req.body.id;
    var Game = client.model('Game',gameSchema);
    Game.findOne({id: id}, function(err,response){
      if(err){
        return res.status(500).send(err);
      }else{
        if(response){
          return res.status(200).send(response);
        }else{
          IGDB.getGame({id:id}).then((result)=>{
            if(result){
              console.log('GAME FROM SOURCE');
              return res.status(200).send(result);
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

