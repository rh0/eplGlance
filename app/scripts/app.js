'use strict';

/**
 * @ngdoc overview
 * @name eplGlanceApp
 * @description
 * # eplGlanceApp
 *
 * Main module of the application.
 */
angular
  .module('eplGlanceApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/team/:id', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
