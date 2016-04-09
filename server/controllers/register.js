var mongoose = require('mongoose');
var User = mongoose.model('User');
var registerController = {};


registerController.create = function(request, response) {
	var user = new User({name: request.body.name, password: request.body.password})
	user.save(function(error){
		if(error){
			console.log('error')
		} else {
			console.log('added user');
			console.log(request.body);
		}
	})
}


module.exports = registerController;