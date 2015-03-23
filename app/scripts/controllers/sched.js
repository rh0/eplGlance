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
      // This could all probably go in a service.
      var fixtures = [];
      var fixtureIndex = -1;
      var dateIndex = -1;
      var timeIndex = -1;
      var matchDay;
      var gameDate;
      var gameTime;

      for(var i=0; i<data.fixtures.length; i++) {
        var gameDateObj = new Date(data.fixtures[i].date);

        if(matchDay !== data.fixtures[i].matchday) {
          matchDay = data.fixtures[i].matchday;
          fixtures.push({
            matchDay: matchDay,
            dates: []
          });
          fixtureIndex++;
          // Reset date/time Index when we move to new matchDay.
          dateIndex = -1;
          timeIndex = -1;
        }

        if(gameDate !== gameDateObj.toLocaleDateString()) {
          gameDate = gameDateObj.toLocaleDateString();
          fixtures[fixtureIndex].dates.push({
            date: gameDateObj.toISOString(),
            timezone: gameDateObj.getTimezoneOffset(),
            times: []
          });
          dateIndex++;
          // Reset the time index.
          timeIndex = -1;
        }

        if(gameTime !== gameDateObj.toLocaleTimeString()) {
          gameTime = gameDateObj.toLocaleTimeString();
          fixtures[fixtureIndex].dates[dateIndex].times.push({
            date: gameDateObj.toISOString(),
            timezone: gameDateObj.getTimezoneOffset(),
            games: []
          });
          timeIndex++;
        }

        fixtures[fixtureIndex].dates[dateIndex].times[timeIndex].games.push({
          date: data.fixtures[i].date,
          homeName: data.fixtures[i].homeTeamName,
          homeId: data.fixtures[i]._links.homeTeam.href.split('/').pop(),
          homeGoals: data.fixtures[i].result.goalsHomeTeam,
          awayName: data.fixtures[i].awayTeamName,
          awayId: data.fixtures[i]._links.awayTeam.href.split('/').pop(),
          awayGoals: data.fixtures[i].result.goalsAwayTeam,
        });
      }

      $scope.fixtures = fixtures;
    });
  });
