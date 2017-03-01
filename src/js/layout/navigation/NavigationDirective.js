(function (angular) {
    'use strict';
	
	var config = window.eMoovConfig;
 
    angular.module('estateApp.directives') 
        .directive('mainNavigation', [function () {
            return {
                restrict: 'E',
                replace: true,
                controller: 'NavigationController',
                templateUrl: config.viewsPath + 'common/navigation.html'
            };
        }]);
}(angular || window.angular));