'use strict';

/**
 * @ngdoc service
 * @name eplGlanceApp.footballData
 * @description
 * # footballData
 * Factory in the eplGlanceApp.
 */
angular.module('eplGlanceApp')
  .factory('footballData', function ($resource, $http, league) {

    $http.defaults.headers.common['X-Auth-Token'] = '7bf4013f2dd948d28ba799cacf72ec50';

    return {
      season: function(seasonCall) {
        return $resource('http://api.football-data.org/alpha/soccerseasons/:league/:seasonCall', {league: league, seasonCall: seasonCall});
      },
      team: function(id) {
        return $resource('http://api.football-data.org/alpha/teams/:teamId', {teamId: id});
      }
    };
  });
