(function() {
	'use strict';
	angular
		.module('myApp')
		.factory('AuthFactory', AuthFactory)

	function AuthFactory($q, $timeout, $http){
	  var factory = {};
	  var user = null;
	  var userinfo;
	  var loginInfo;
	  var testData = 'YOU WORKING YET????!'

	    return ({
	      isLoggedIn: isLoggedIn,
	      getUserStatus: getUserStatus,
	      login: login,
	      logout: logout,
	      register: register,
	      sendUserInfo: senduserInfo,
	      getUserInfo: getUserInfo
	    });


		function AuthControllerFunction(AuthFactory, $location) {
			var vm = this;

			vm.register = register;
			vm.login = login;

			vm.userInfo = {
				username: "",
				password: ""
			}

			function register() {
				console.log('registering user')
				AuthFactory.register(vm.userInfo)
				.then(function() {
					console.log('successfully added username to database and im in the contorller');
					vm.disabled = false;
					$location.path('/posts');
				})
				.catch(function() {
					console.log('error adding username in the controller :/')
				})
				vm.newUser = {};
			}

			function login() {
				console.log('loggin in user')
				AuthFactory.login(vm.userInfo)
				.then(function() {
					console.log('successfully logged in user');
					vm.disabled = false;
					$location.path('/posts');
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


//////////////
	 

	

	}
})();
