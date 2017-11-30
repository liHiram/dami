'use strict';

angular.module('myApp.view1', ['ui-router'])

.config(['$stateProvider', function($stateProvider) {
  // $routeProvider.when('/view1', {
  //   templateUrl: 'view1/view1.html',
  //   controller: 'View1Ctrl'
  // });
    $stateProvider.state( {
        name:'view1',
        url:'/view1',
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
        });
}])

.controller('View1Ctrl', ['$scope','$http','$state','UserService',function($scope,$http,$state,UserService) {
  //   $http.jsonp('http://localhost/dami/get-users-cors.php')
  //       .then(function (resp) {
  //           console.log(resp);
  //           $scope.users=resp.data;
  //       });
    $scope.users = UserService.getUsers();
    if(!$scope.users) {
        UserService.all().then(function () {
            $scope.users = UserService.getUsers();
        });
    }
  $scope.addUser=function () {
      // $location.path('/editUser/'+' ');
      $state.go('editUser',{name:''})
  };
  $scope.updataUser=function (name) {
      // $location.path('/editUser/'+name)
      $state.go('editUser',{name:'name'})
  }
}]);