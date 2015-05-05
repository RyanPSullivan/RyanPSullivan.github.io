'use strict';

angular.module('myApp.page.nav-pane',[])


.controller('NavPaneController', ['$scope', '$http', function($scope, $http)
{
    $scope.activeIndex = 0;
}]);
