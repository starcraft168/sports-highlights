(function() {
	console.log();
	angular
		.module('myApp')
		.directive('shNavbar', shNavbarFunction)

		function shNavbarFunction() {
			return {
				templateUrl: '/navbar/navbar.html',
				restrict: 'EA',
				scope: {},
				controller: NavBarControllerFunction,
				controllerAs: 'vm'
			};
		}

		NavBarControllerFunction.$inject = ['$location', 'AuthFactory'];

		function NavBarControllerFunction($location, AuthFactory) {
			var vm = this;
			vm.user = AuthFactory.getUsername();
			vm.logout = logout;
			vm.userName = AuthFactory.getUsername;
			vm.test = 'yooy'

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