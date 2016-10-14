'use strict';

/**
 * @ngdoc service
 * @name onlineShoppingApp.mobilefactory
 * @description
 * # mobilefactory
 * Factory in the onlineShoppingApp.
 */
angular.module('onlineShoppingApp')
  .factory('mobilefactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
