/**
 * Game.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const {Schema} = require('mongoose');

var schema = new Schema({
    id: {required:true, type:Number, unique:true},
    name : {required:true, type:String},
    slug: {required:true, type:String, unique:true},
    url: String,
    summary: String,
    storyline: String,
    franchise: Number,
    hypes: Number,
    popularity: Number,
    rating: Number,
    rating_count: Number,
    aggregated_rating: Number,
    aggregated_rating_count: Number,
    total_rating: Number,
    total_rating_count:Number,
    game:Number,
    version_parent:Number,
    developers: [Number],
    publishers: [Number],
    game_engines: [Number],
    category: Number,
    time_to_beat: Schema.Types.Mixed,
    player_prespectives: [Number],
    game_modes: [Number],
    keywords:[Number],
    themes:[Number],
    genres:[Number],
    first_release_date: Date,
    status: Number,
    release_dates: [Schema.Types.Mixed],
    alternative_names: [Schema.Types.Mixed],
    screenshots: [Schema.Types.Mixed],
    videos: [Schema.Types.Mixed],
    cover: Schema.Types.Mixed,
    esrb: Schema.Types.Mixed,
    pegi:Schema.Types.Mixed,
    websites: [Schema.Types.Mixed],
    tags:[Number],
    dlcs:[Number],
    expansions:[Number],
    standalone_expansions:[Number],
    bundles:[Number],
    games:[Number],
    external:Schema.Types.Mixed,
    console_ids:[Schema.Types.ObjectId],
    created_at: Date,
    updated_at: Date,


},{ collection: 'game' , minimize: false });


var Game = schema;

// make this available to our users in our Node applications
module.exports = Game;
