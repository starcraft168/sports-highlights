(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('LinksFactory', LinksFactory);

        LinksFactory.$inject = ['$http', '$q', '$sce'];

        function LinksFactory($http, $q, $sce) {

            var arrayOfLinks = ["https://www.youtube.com/embed/eFRi5A8MP9g", "https://www.youtube.com/embed/xTlFOCRvy68", "https://www.youtube.com/embed/urYnkhU5t3w"];
            var youTubeLinks = [];

            angular.forEach(arrayOfLinks, function(value) {
                var newLink = changeEmbedToV(value);
                var element = $sce.trustAsResourceUrl(newLink);
                youTubeLinks.push(element);
            });

            var service = {
                requestData: requestData,
                youTubeLinks: youTubeLinks,
                trustEachLink: trustEachLink
            };
            return service;

            ////////////
            /*
            1. First make $http request to server for data
            2. Parse through the data and grab the links
            3. Call the changeEmbedToV function on each of the links
            4. Trust each of the links using $sce.trustAsResourceURL
            5. Push each of the links to the youTubeLinks array
            */

            function requestData() {
                return $http({
                  method: 'GET',
                  url: '/someUrl' //insert the URL to query the database of links
                }).then(function successCallback(response) {
                    console.log('response was successful', response.status);
                    console.log(response.data);
                    return response.data;
                }, function errorCallback(response) {
                    console.log('response failed', response.status);
                });
            };

            function changeEmbedToV(string) {
                //parse the link to change from embed into v - necessary to get rid of chrome-extension error message
                var newLink = string.slice(0,24) + 'v' + string.slice(29);
                return newLink;
            };

            function trustEachLink(collection) {
                var arr = [];
                angular.forEach(array, function(value) {
                    var element = $sce.trustAsResourceUrl(changeEmbedToV(value));
                    arr.push(element);
                });
                return arr;
            };
        }
})();