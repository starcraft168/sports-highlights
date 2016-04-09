var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment')
var comments = {};

//Retrieve Comment for a single post
comments.show = function(request, response) {
	Post.findOne({_id: request.params.id})
	.populate('comments')
	.exec(function(error, results) {
		if(error) {
			console.log('couldnt get comments for this post')
		} else {
			console.log('got the results' + results)
			response.json(results);
			response.end()
		}
	})
}

//Creating Commetn
comments.create = function(request, response) {
	console.log("Here is the paramater id" + request.params.id)
	Post.findOne({_id: request.params.id}, function(error, results){
		console.log('got the results' + results)
		var comment = new Comment({text: request.body.text, _owner: request.body.username})
		comment._post = results._id
		results.comments.push(comment)
		results.save(function(error){
			if(error) {
				console.log('error saving comment to post')
			} else {
				comment.save(function(error, results){
					if(error) {
						console.log('error saving comment to Comment model')
					} else {
						console.log('Great Job!! ' + results)
						response.end();
					}
				})
			}
		})
	})

}



module.exports = comments
