(function() {
	'use strict';
	
	angular
		.module('myApp')
		.controller('LinksController', LinksController);

		LinksController.$inject = ['$scope', 'LinksFactory', '$sce'];

		function LinksController($scope, LinksFactory, $sce) {

			$scope.youTubeLinks = LinksFactory.youTubeLinks; //array of youTube links
			$scope.test = $sce.trustAsResourceUrl("https://www.youtube.com/v/eFRi5A8MP9g");

		};
})();