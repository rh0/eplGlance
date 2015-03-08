'use strict';

/**
 * @ngdoc service
 * @name eplGlanceApp.footballData
 * @description
 * # footballData
 * Factory in the eplGlanceApp.
 */
angular.module('eplGlanceApp')
  .factory('footballData', function ($resource, $http) {
    $http.defaults.headers.common['X-Auth-Token'] = '7bf4013f2dd948d28ba799cacf72ec50';

    return $resource('http://api.football-data.org/alpha/soccerseasons/354/leagueTable');
  });
