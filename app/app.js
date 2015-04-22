'use strict';

angular.module('beerApp', ['ngRoute', 'beers.list', 'svgModule'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/beers/beersList.tpl.html',
                controller: 'BeersListCtrl'
            })
            .when('/svg', {
                templateUrl: 'app/svg/svg.tpl.html',
                controller: 'SvgCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });