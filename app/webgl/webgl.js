'use strict';

angular.module('myApp.webgl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/webgl', {
    templateUrl: 'app/webgl/webgl.html',
    controller: 'WebglController'
  });
}])

.controller('WebglController', [function() {}]);
