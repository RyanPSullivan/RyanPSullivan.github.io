'use strict';
angular.module('myApp.emacs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider)
{ 
   $routeProvider.when('/emacs', {
       templateUrl: 'app/emacs/emacs.html',
       controller: 'EmacsController'
       });
}])

.controller('EmacsController',[function() {}]);
