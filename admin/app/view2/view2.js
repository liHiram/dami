'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  // $routeProvider.when('/view2', {
  //   templateUrl: 'view2/view2.html',
  //   controller: 'View2Ctrl'
  // });
    $stateProvider.state( {
        name:'view2',
        url:'/view2',
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    });
}])

.controller('View2Ctrl', [function() {

}]);