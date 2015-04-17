'use strict';

angular.module('beerApp', [
  'ngRoute',
  'beers.list'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/beersList.tpl.html',
        controller: 'BeersListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

