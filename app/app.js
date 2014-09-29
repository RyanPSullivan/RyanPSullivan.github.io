'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'yaru22.md',
  'myApp.webgl',
  'myApp.emacs',
  'myApp.version',
  'myApp.nav'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'webgl'});
}]);
