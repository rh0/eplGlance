'use strict';

/**
 * @ngdoc function
 * @name eplGlanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eplGlanceApp
 */
angular.module('eplGlanceApp')
  .controller('MainCtrl', function ($scope, footballData, season) {
    $scope.leagueSeason = season;
    footballData.season('leagueTable').get().$promise.then(function(data) {
      $scope.fbData = data;
      for(var i = 0; i < $scope.fbData.standing.length; i++) {
        var teamId = $scope.fbData.standing[i]._links.team.href;
        $scope.fbData.standing[i].teamId = teamId.split('/').pop();
      }
    });
  });
