/**
 * Company.js
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
    description: String,
    country: Number,
    website: String,
    start_date: Date,
    start_date_category: Number,
    changed_company_id: Number,
    change_date: Date,
    change_date_category: Number,
    twitter: String,
    published: [Number],
    developed: [Number],
    created_at: Date,
    updated_at: Date,
},{ collection: 'companies' , minimize: false });

var Company = schema;
module.exports = Company;