(function(angular) {
	'use strict';

	var config = window.eMoovConfig;

	angular.module('estateApp')
		.service('apiService', ['$http', '$q', function($http, $q) {
			return {
				get: function(type, id) {
					var deferred = $q.defer();

					id = (typeof id === 'undefined') ? '' : id;

					$http.get(config.apiPath + type + '/' + id)
						.then(function(result) {
							if (result.hasOwnProperty('status') && result.status === 200) {
									deferred.resolve(result.data);
								}
							},
							function() {
								console.log('Server not found or timeout');
							});

					return deferred.promise;
				},
				
				editViewing: function(id, data) {
					var deferred = $q.defer();
					$http.put(config.apiPath + 'viewings/' + id, data)
						.then(function(result) {
							if (result.hasOwnProperty('status') && result.status === 200) {
								deferred.resolve(result.data);
							}
						});

					return deferred.promise;
				}
			}
		}]);
}(angular || window.angular));