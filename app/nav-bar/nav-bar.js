'use strict';

angular.module('myApp.nav-bar',[])


.controller('NavController', ['$scope', '$http', function($scope, $http)
{
    $scope.activeIndex = 0;
    $http
	.get('app/nav-bar/navigation.json')
	.then( function( res )
	{
	    $scope.nav = res.data;
	});
}]);
