'use strict';

angular.module('myApp.viewEdit', ['ui-router'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-edit', {
    templateUrl: 'view-edit/view-edit.html',
    controller: 'ViewEditCtrl'
  });
}])

.controller('ViewEditCtrl', [function() {

}]);