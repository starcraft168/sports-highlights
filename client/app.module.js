 
(function(){
  'use strict';
  angular
  .module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/register');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('Home', {
            url: '/home',
            templateUrl: '/views/Home.html',
            controller: 'LinksController'
        })

        .state('Login', {
            url: '/login',
            templateUrl: '/views/Login.html'
        })

        .state('SinglePost', {
            url: '/SinglePost',
            templateUrl: '/views/SinglePost.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Register', {
            // we'll get to this in a bit   
            url: '/register',
            templateUrl: '/views/Register.html',
            controller: 'AuthCtrl'    
        });
        
  });
})()






