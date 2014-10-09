'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'yaru22.md',
  'myApp.webgl',
  'myApp.linux',
  'myApp.version',
  'myApp.nav',
  'myApp.portfolio'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'webgl'});
}]);
