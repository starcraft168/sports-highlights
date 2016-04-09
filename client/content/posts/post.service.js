(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('PostFactory', PostFactory);

		PostFactory.$inject = ['$http', '$routeParams', '$q', 'AuthFactory'];

		function PostFactory($http, $routeParams, $q, AuthFactory) {
			var postId = $routeParams.post_id;

			var posts, 
				post, 
				comments,
				comment,
				thisUser,
		 		userinfo

		 	var service = {
		 		addPost: addPost,
		 		getPosts: getPosts,
		 		getSinglePost: getSinglePost
		 	}

		 	return service;

			//test to check if it makes api call to backend

			function getPosts(callback){
				var deferred = $q.defer();
				$http.get('/getPosts')
					.success(function(data){
						posts = data;
						deferred.resolve(posts)
					})
					//error
					.error(function(data){
						deferred.reject();
					})
				return deferred.promise;
			};

			function addPost(info, callback) {
				$http.post('/addPost', {title: info.title, link: info.link, description: info.description, username: info.username }).success(function(output){
					posts = output;
					callback(posts)
				})
			};

			//find Single Post (pass)
			function getSinglePost(id, callback) {
				$http.get('/getSinglePost/' + id).success(function(output){
					post = output;
					callback(post)
				})
			};

		};
})();
