'use strict';

angular.module('myApp.editUser', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name:'editUser',
            url:'/editUser/{name}',
            templateUrl: 'edit-user/edit-user.html',
            controller: 'EditUserCtrl'
        });
    }])

.controller('EditUserCtrl', ['$scope','$http','$location','$routeParams','UserService',
    function($scope,$http,$location,$routeParams,UserService) {

    //当前表单更新用户对象
    $scope.user = UserService.one($routeParams.name);
        $scope.action=$scope.user?'更新用户':'新增用户';
    $scope.onSubmit=function () {
        console.log($scope.user);
        var action=$scope.action=='更新用户'?'updata':'add';
        $http.post('http://localhost/dami/edit-user.php?action='+action,$scope.user)
            .then(function (resp) {
                console.log(resp);
                var result = resp.data;
                if(result.success){//操作成功
                    // 更新本地缓存数据
                    UserService.setUsers(result.data);
                    //跳转页面
                    $location.path('/view1')
                }else {
                    alert('保存失败请重试！')
                }
            })
    }
}]);