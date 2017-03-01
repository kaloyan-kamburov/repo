(function (angular) {
    'use strict';
	var config = window.eMoovConfig;

    angular.module('estateApp.controllers')
        .controller('HomeController', ['$scope', 'apiService', function ($scope, apiService) {
            
            $scope.viewingsVisible = false;
            $scope.hosts = [];

            $scope.viewingData = {};

            apiService.get('estates').then(function(estates) {
                $scope.estates = estates;
            });
            
            apiService.get('hosts').then(function(hosts) {
                $scope.hosts = hosts;
            });

            $scope.showViewings = function(id) {
                $scope.viewingsVisible = true;
                $scope.sortType = 'name';
                $scope.sortReverse = false;

                apiService.get('viewings', id).then(function(viewings) {
                    $scope.viewings = viewings;
                    $scope.viewingsId = viewings.id;
                    $scope.viewingMembers = viewings.members;
                });
            }

            $scope.hideViewings = function() {
                $scope.viewingsVisible = false;
            }

            $scope.addViewing = function(id) {
                $scope.viewingData.host = $scope.viewingData.host.name;
                $scope.viewings.members.push($scope.viewingData);
                apiService.editViewing(id, $scope.viewings).then(function() {
                    console.log('Viewing added');
                });
            }

            $scope.removeViewing = function(id, item) {
                $scope.viewings.members.splice($scope.viewings.members.indexOf(item), 1);
                apiService.editViewing(id, $scope.viewings).then(function() {
                    console.log('Viewing removed');
                });
            }
            
            $scope.sortTable = function(prop) {
                $scope.sortType = prop;
                $scope.sortReverse = !$scope.sortReverse;
            }

        }]);

}(angular || window.angular));