angular.module('repondez')
  .factory('$api', ['$http', '$q',
    function($http, $q) {

      var baseUrl = 'http://repondez.lsquared-wedding.com/';

      return {
        loadRsvp: function(guestCode) {
          return $http({
            method: 'GET',
            url: baseUrl + 'rsvp/' + guestCode
          });
        },
        saveRsvp: function(guestCode, rsvp) {
          return $http({
            method: 'PUT',
            url: baseUrl + 'rsvp/' + guestCode,
            data: rsvp
          });
        }
      };
    }
  ]);