'use strict';

/**
 * @ngdoc function
 * @name onlineShoppingApp.controller:MobileCtrl
 * @description
 * # MobileCtrl
 * Controller of the onlineShoppingApp
 */
angular.module('onlineShoppingApp')
    .controller('MobileCtrl', function (mobilefactory, $scope, $rootScope) {

        var promise = mobilefactory.callserver();

        promise.then(function (data) {
            $scope.result = data;
            console.log($scope.result);
        }, function (error) {
            $scope.result = error;
        });

        var total = 0;
        $scope.totalPrice = function (price) {

            total += price;
            console.log("Total ", total);
            $rootScope.totalPrice = total;
        }
    });
