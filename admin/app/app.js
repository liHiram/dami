'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router','ui.router.stateEvents',
  // 'ngRoute',
  'myApp.view1',
  'myApp.editUser',
  'myApp.view2',
  'myApp.version',
    'myApp.userService',
    'myApp.viewEdit'
]).
config(['$urlRouterProvider', function() {
  // $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view1'});
    '$urlRouterProvider'.otherwise('/view1')
}]);
