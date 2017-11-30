'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])
    .directive('routerLinkActive', ['$location', function(version) {
        return function(scope, elm, attrs) {
            // 1.监听路由事件
            scope.$on('$routeChangeSuccess',function (event) {
                var path = $location.path();
                console.log(path);
                var href = elm.find('a').attr('href');
                console.log(href);
                if (path.indexOf(href)!= -1){
                    //路由匹配
                    elm.addClass('active')
                }else {
                    elm.removeClass('active')
                }
            })
        };
    }]);
