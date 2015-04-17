'use strict';

angular
  .module('beerApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beer', {
        templateUrl: 'views/beersList.tpl.html',
        controller: 'BeerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

