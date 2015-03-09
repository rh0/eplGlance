'use strict';

/**
 * @ngdoc function
 * @name eplGlanceApp.controller:SchedCtrl
 * @description
 * # SchedCtrl
 * Controller of the eplGlanceApp
 */
angular.module('eplGlanceApp')
  .controller('SchedCtrl', function ($scope, footballData, season) {
    $scope.leagueSeason = season;
    footballData.season('fixtures').get({ timeFrame: 'n14' }).$promise.then(function(data) {
      // We're about to get loopy. Helper variables for this.
      var fixtures = [];
      var fixtureIndex = -1;
      var dateIndex = -1;
      var matchDay;
      var gameDate;

      console.log(data);
      for(var i=0; i<data.fixtures.length; i++) {
        if(matchDay !== data.fixtures[i].matchday) {
          matchDay = data.fixtures[i].matchday;
          fixtures.push({
            matchDay: matchDay,
            dates: []
          });
          fixtureIndex++;
          // Reset dateIndex when we move to new matchDay.
          dateIndex = -1;
        }

        if(gameDate !== data.fixtures[i].date) {
          gameDate = data.fixtures[i].date;
          fixtures[fixtureIndex].dates.push({
            date: gameDate,
            games: []
          });
          dateIndex++;
        }

        fixtures[fixtureIndex].dates[dateIndex].games.push({
          date: data.fixtures[i].date,
          homeName: data.fixtures[i].homeTeamName,
          homeId: data.fixtures[i]._links.homeTeam.href.split('/').pop(),
          homeGoals: data.fixtures[i].result.goalsHomeTeam,
          awayName: data.fixtures[i].awayTeamName,
          awayId: data.fixtures[i]._links.awayTeam.href.split('/').pop(),
          awayGoals: data.fixtures[i].result.goalsAwayTeam,
        });
      }

      console.log(fixtures);
      $scope.fixtures = fixtures;
    });
  });
