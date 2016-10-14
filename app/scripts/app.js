'use strict';

/**
 * @ngdoc overview
 * @name onlineShoppingApp
 * @description
 * # onlineShoppingApp
 *
 * Main module of the application.
 */
angular
    .module('onlineShoppingApp', [
    'ngRoute'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/mobile', {
                templateUrl: 'views/mobile.html',
                controller: 'MobileCtrl',
                controllerAs: 'mobile'
            })
            .when('/books', {
              templateUrl: 'views/books.html',
              controller: 'BooksCtrl',
              controllerAs: 'books'
            })
            .when('/clothes', {
              templateUrl: 'views/clothes.html',
              controller: 'ClothesCtrl',
              controllerAs: 'clothes'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
