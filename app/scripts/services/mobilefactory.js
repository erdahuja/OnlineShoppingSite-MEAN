'use strict';

/**
 * @ngdoc service
 * @name onlineShoppingApp.mobilefactory
 * @description
 * # mobilefactory
 * Factory in the onlineShoppingApp.
 */
angular.module('onlineShoppingApp')
    .factory('mobilefactory', function ($http, $q) {
        var obj = {

            callserver: function () {

                var defer = $q.defer();


                function success(data) {
                    defer.resolve(data);


                }

                function error(data) {
                    defer.reject(data);

                }

                $http.get('server/mobiles.json').then(success, error);

                return defer.promise;

            }


        };



        return obj;
    });
