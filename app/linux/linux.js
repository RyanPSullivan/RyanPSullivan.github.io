'use strict';
angular.module('myApp.linux', ['ngRoute'])

.config(['$routeProvider', function($routeProvider)
{
   $routeProvider.when('/tmux', {
       templateUrl:'app/linux/tmux.html',
       controller:'MarkdownController'
   });
   $routeProvider.when('/emacs', {
       templateUrl: 'app/linux/emacs.html',
       controller: 'MarkdownController'
       });
}])

.controller('MarkdownController',[function() {}]);
