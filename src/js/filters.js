(function (angular) {
    'use strict';
	
	var config = window.eMoovConfig;

    angular.module('estateApp.filters')
        .filter('imageAssets', function () {
            return function (input) {
                return config.imagesPath + input;
            };
        })

}(angular || window.angular));