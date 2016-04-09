var mongoose = require('mongoose');
var Comment = require('../models/Comment.js')

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var Post = new mongoose.Schema({
	title: String,
	link: String,
	_owner: {type: String, ref: 'User'},
	description: String,
	points: Number,
	//
	comments: [{ type: ObjectId, ref: 'Comment'}],
	date_created: Date
})

module.exports = mongoose.model('Post', Post);