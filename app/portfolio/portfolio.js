
'use strict';
angular.module('myApp.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider)
{
   $routeProvider.when('/university', {
       templateUrl:'app/portfolio/university.html',
       controller:'MarkdownController'
   });
}])

.controller('MarkdownController',[function() {}]);
