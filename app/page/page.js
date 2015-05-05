'use strict';

angular.module('myApp.page',[
    'ngRoute',
  'myApp.page.nav-pane',
  'myApp.page.side-pane',
  'myApp.page.main-pane'
])

.config(['$routeProvider', function($routeProvider)
{
   $routeProvider.when('/page', {
       templateUrl:'app/page/page.html',
       controller:'PageController'
   });
}])

.controller('PageController', ['$scope', '$http', function($scope, $http)
{
    $http
    .get('app/nav-pane/navigation.json')
    .then( function( res )
    {
        $scope.navigation = res.data;
        $scope.activePane = "app/education/university.html";
        $scope.activeController = "app/education/education.js";
    });


}]);
