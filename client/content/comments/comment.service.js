(function() {
	'use strict';
	angular
		.module('myApp')
		.factory('CommentFactory', CommentFactory);

		CommentFactory.$inject = ['$http', '$routeParams', '$q', 'AuthFactory'];

		function CommentFactory($http, $routeParams, $q, AuthFactory) {
			var postId = $routeParams.post_id;

			var comments;

			var service = {
				getComments: getComments,
				addComment: addComment
			};

			return service;

			function getComments(id) {
				var deferred = $q.defer();
				$http.get('/getComments/' + id).success(function(data) {
					comments = data
					console.log(data)
					deferred.resolve(comments)
				})
				.error(function(data) {
					deferred.reject();
				})
				return deferred.promise
			};

			function addComment(id, info, callback) {
				$http.post('/addComment/' + id,  {text: info.text, username: info.username })
					.success(function(output) {
						comments = output;
						callback(comments);
				})
			};
		}
})();