(function() {
	'use strict'
	angular
		.module('myApp')
		.directive('shNavbar', shNavbarFunction)

		function shNavbarFunction() {
			return {
				templateUrl: 'app/layout/nav2.html',
				restrict: 'EA',
				scope: {},
				controller: NavBarControllerFunction,
				controllerAs: 'vm'
			};
		}

		NavBarControllerFunction.$inject = ['$location', 'AuthFactory'];

		function shNavbarFunction($location, AuthFactory) {
			var vm = this;
			var user = AuthFactory.getUsername();
			vm.logout = logout;
			vm.userName = AuthFactory.getUsername;

			vm.isLoggedIn = AuthFactory.isLoggedIn;
			vm.currentUser = 'hello';

			function logout() {
				AuthFactory.logout();
				$location.path('/login')

			}
			function currentUser(){
				AuthFactory.currentUser();
			}
			var isIn = function(){
				return AuthFactory.isLoggedIn();
			}
		}




})()