(function() {
	'use strict';
	 angular
	  .module('myApp')
	  .controller('AuthCtrl', AuthCtrlFunction)

		AuthCtrlFunction.$inject = ["AuthFactory", '$location', '$scope'];

		function AuthCtrlFunction(AuthFactory, $location, $scope) {
			var vm = this;
			$scope.hello = 'yo'
			$scope.login = login
			$scope.register = register

			$scope.userInfo = {
				username: "",
				password: ""
			}



		

			function register() {
				console.log('registering user')
				console.log($scope.userInfo)
				AuthFactory.register($scope.userInfo)
				.then(function() {
					console.log('successfully added username to database and im in the contorller');
					vm.disabled = false;
					$location.path('/home');
				})
				.catch(function() {
					console.log('error adding username in the controller :/')
				})
				vm.newUser = {};
			}

			function login() {
		    	console.log('above is the info')

				console.log('loggin in user')
				AuthFactory.login($scope.userInfo)
				.then(function() {
					console.log('successfully logged in user');
					vm.disabled = false;
					$location.path('/home');
				})
				.catch(function() {
					console.log('error adding username in the controller :/')
				})
				vm.newUser = {}
			}

			// function logout(){
			// 	console.log('logging out');
			// 	AuthFactory.logout();
			// 	$location.path('/register')
			// }
		}


})();