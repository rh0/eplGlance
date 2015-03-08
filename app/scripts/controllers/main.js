'use strict';

/**
 * @ngdoc function
 * @name eplGlanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eplGlanceApp
 */
angular.module('eplGlanceApp')
  .controller('MainCtrl', function ($scope, footballData) {
    $scope.fbData = footballData.get();
    console.log($scope);
  });
