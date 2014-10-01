'use strict';

angular.module('myApp.nav',[])


.controller('NavController', ['$scope', '$http', function($scope, $http)
{ 
    $scope.activeIndex = 0;
    $http
	.get('app/nav/nav.json')
	.then( function( res ) 
	{
	    $scope.nav = res.data;
	});
}]);
