/**
 * Console.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const {Schema} = require('mongoose');

var schema = new Schema({
    id: {required:true, type:Number, unique:true},
    original_id: {required: true, type: Number, unique:true},
    name : {required:true, type:String},
    slug: {required:true, type:String},
    url: String,
    logo: Schema.Types.Mixed,
    website: String,
    summary: String,
    alternative_name: String,
    generation: Number,
    games: [Number],
    versions: [Schema.Types.Mixed],
    created_at: Date,
    updated_at: Date,
},{ collection: 'consoles' , minimize: false });

var Console = schema;
module.exports = Console;
