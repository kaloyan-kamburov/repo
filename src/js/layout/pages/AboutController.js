(function (angular) {
    'use strict';
	var config = window.eMoovConfig;

    angular.module('estateApp.controllers')
        .controller('AboutController', ['$scope', function ($scope) {
            $scope.pages = config.pages;

			$scope.title = "eMoov FE task";
            $scope.author = "Kaloyan Kamburov";
        }]);

}(angular || window.angular));