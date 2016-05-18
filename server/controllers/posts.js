var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comments = mongoose.model('Comment')
var posts = {};

posts.create = function(request, response) {
	var post = new Post({title: request.body.title, link: request.body.link, description: request.body.description, _owner: request.body.username})
	post.save(function(error, data){
		if(error){
			console.log(error) 
		} else {
			console.log('success')
			console.log(data)
			response.json(data)
		}
	})
}

posts.show = function(request, response){
	Post.find({}, function(error, data){
		if(error){
			console.log('error')
		} else {
			response.json(data)
		}
	})
}
posts.getSinglePost = function(request, response) {
	console.log(request.params.id)
	Post.find({_id: request.params.id}, function(error, data){
		if(error) {
			console.log('error')
		} else {
			console.log('success' + data)
			response.json(data);
			response.end();
		}
	})
}

module.exports = posts
