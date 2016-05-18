(function() {
	'use strict';

	angular
		.module('myApp')
		.controller('CommentCtrl', CommentCtrlFunction)
	

	CommentCtrlFunction.$inject = ['$scope', '$location', '$routeParams', 'CommentFactory', 'AuthFactory']

	function CommentCtrlFunction($scope, $location, $routeParams, CommentFactory, AuthFactory) {
		var postId = $routeParams.post_id
		$scope.comments;
		$scope.addComment = addComment
		$scope.username

		// Stuff to load
		CommentFactory.getComments(postId)
			.then(function(data){
				$scope.comments = data.comments;
				console.log(data)
			})
			.catch(function(error){
				console.log(error)
			})

		AuthFactory.getUserInfo()
			.then(function(data){
				$scope.check = data;
				$scope.username = $scope.check[0].username
			})
			.catch(function(error){
				console.log(error)
			});
		//
		function addComment() {
			console.log($scope.username);
			CommentFactory.addComment(postId, {text: $scope.newComment.text, username: $scope.username }, function(data){
				$scope.comments = data;
				console.log('done')
			});
			$scope.newComment = {};

			CommentFactory.getComments(postId)
				.then(function(data){
					console.log(data + 'here are the comments in the controller')
					$scope.comments = data.comments;
				})
				.catch(function(error){
					console.log(error + 'error')
				})

			}

	}
	function bootstrap() {
		angular
		.element(document).ready(function() {
			angular.bootstrap(document, ['myApp'])
		})
	}

})();