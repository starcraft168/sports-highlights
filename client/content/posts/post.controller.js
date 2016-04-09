(function() {
	'use strict';

	angular.module('myApp')
	.controller('PostCtrl', PostCtrlFunction);

	PostCtrlFunction.$inject = ['$scope', '$location', '$routeParams', 'PostFactory', 'AuthFactory'];
		
		function PostCtrlFunction($scope, $location, $routeParams, PostFactory, AuthFactory) {
			$scope.addPost = addPost;
			$scope.newComment = {}
			$scope.comments
			//list of posts
			$scope.posts;
			$scope.logout = logout
			//single post
			$scope.post,
			$scope.check
			$scope.userInfo;
			var PostId = $routeParams.post_id
			$scope.username;

			//rename check -- check gets username!
			AuthFactory.getUserInfo()
				.then(function(data){
					console.log(data)
					$scope.check = data;
					console.log($scope.check[0].username)
					$scope.username = $scope.check[0].username
				})
				.catch(function(){
					console.log('error!')
				});

			PostFactory.getPosts()
				.then(function(data) {
					console.log('hello')
					$scope.posts = data
				})
				.catch(function() {
					console.log('error')
				});

			PostFactory.getSinglePost(PostId, function(data){
				$scope.post = data
			})
			
			function logout() {
				AuthFactory.logout();
			}
		
			function addPost() {
				PostFactory.addPost({title: $scope.newPost.title, link: $scope.newPost.link, description: $scope.newPost.description, username: $scope.username }, function(data) {
					$scope.posts = data;
				})
				$scope.newPost = {}
				PostFactory.getPosts()
					.then(function(data) {
						$scope.posts = data
					})
					.catch(function() {
						console.log('error')
					});
			}


		}
})()
