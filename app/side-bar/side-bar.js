'use strict';

angular.module('myApp.side-bar',[])

.controller('SideBarController',['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll)
{
    $scope.scrollTo = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();
    //reset to old to keep any additional routing logic from kicking in
    $location.hash(old);
    };
}]);
