(function(angular) {
	'use strict';
 
	var config = window.eMoovConfig;

	angular.module('estateApp', [
		'ui.router',
		'angularjs-datetime-picker',
		'estateApp.controllers',
		'estateApp.directives',
		'estateApp.filters'
	], function() {});

	//routes
	angular
		.module('estateApp')
		.config(routesConfig);

	routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$sceDelegateProvider'];

	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider) {
		var pages = config.pages;

		angular.forEach(pages, function(page) {
			$stateProvider.state(page.state, {
				url: page.url,
				templateUrl: config.pagesPath + page.template,
				controller: page.controller
			});
		});

		$urlRouterProvider.otherwise('/');
        $sceDelegateProvider.resourceUrlWhitelist(config.resourceUrlWhitelist);
		$locationProvider.html5Mode(true);
	}

	//run
	angular
		.module('estateApp')
		.run(run);
	
	run.$inject = ['$rootScope'];
	
	function run($rootScope) {
		$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
			//e.preventDefault();

		});
	}
	
})(angular || window.angular);