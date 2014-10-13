
'use strict';
angular.module('myApp.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider)
{
   $routeProvider.when('/university', {
       templateUrl:'app/portfolio/university.html',
       controller:'MarkdownController'
   });
}])

.controller('MarkdownController',['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) 
{
    $scope.scrollTo = function(id) {
	var old = $location.hash();
	$location.hash(id);
	$anchorScroll();
	//reset to old to keep any additional routing logic from kicking in
	$location.hash(old);
    };
}]);
