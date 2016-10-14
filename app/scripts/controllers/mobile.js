'use strict';

/**
 * @ngdoc function
 * @name onlineShoppingApp.controller:MobileCtrl
 * @description
 * # MobileCtrl
 * Controller of the onlineShoppingApp
 */
angular.module('onlineShoppingApp')
    .controller('MobileCtrl', function (mobilefactory) {

        promise.then(function (data) {
            $scope.result = data;
            console.log($scope.result);
        }, function (error) {
            $scope.result = error;
        });

    });
