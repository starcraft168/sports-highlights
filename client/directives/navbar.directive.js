(function() {
	'use strict'l
	angular.module('app.nav_bar')
	.directive('shNavbar', nav_bar)

	function nav_bar() {
		return: {
			templateUrl: 'directives/navbar.html',
			restrict:'EA',
			scope: {},
			controller: NavbarControllerFunction,
			controllerAs: 'vm'
		};
	}

	NavBarControllerFunction.$inject = ['$location', AuthFactory]
	function NavbarControllerFunction($location, AuthFactory) {
		var vm = this;
	}
})