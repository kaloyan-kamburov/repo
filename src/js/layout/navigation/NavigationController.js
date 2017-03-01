(function(angular) {
    'use strict'; 
	var config = window.eMoovConfig;

    angular.module('estateApp.controllers')
        .controller('NavigationController', ['$scope', function ($scope) {
            $scope.pages = config.pages;
        }]);

}(angular || window.angular));