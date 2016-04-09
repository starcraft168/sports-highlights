var mongoose = require('mongoose');
var User = require('../models/User.js')
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var Comment = new mongoose.Schema({
	_owner: {type: String, ref: 'User'},
	_post: { type: ObjectId, ref: 'Post' },
	text: String,
	points: Number,
	date_created: Date
})

module.export = mongoose.model('Comment', Comment);