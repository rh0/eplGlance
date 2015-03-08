'use strict';

/**
 * @ngdoc function
 * @name eplGlanceApp.controller:TeamctrlCtrl
 * @description
 * # TeamctrlCtrl
 * Controller of the eplGlanceApp
 */
angular.module('eplGlanceApp')
  .controller('TeamCtrl', function ($scope, $routeParams, footballData) {
    $scope.fbData = footballData.team($routeParams.id).get();
    console.log($scope);
  });
