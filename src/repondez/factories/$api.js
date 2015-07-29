angular.module('repondez')
  .factory('$api', ['$http', '$q',
    function($http, $q) {

      var baseUrl = 'http://repondez.lsquared-wedding.com/api/';

      var loadRsvpFake = function(guestCode) {
        var defer = $q.defer();

        defer.resolve({
          data: {
            guestCode: guestCode,
            guests: [{
              uuid: '00000000000000000000000000000000',
              name: 'George Jetson',
              attending: null,
              responded: null
            }, {
              uuid: '00000000000000000000000000000001',
              name: 'Judy Jetson',
              attending: null,
              responded: null
            }, ]
          }
        });

        return defer.promise;
      };

      var loadRsvpReal = function(guestCode) {
        return $http({
          method: 'GET',
          url: baseUrl + 'rsvp/' + guestCode
        });
      };

      var saveRsvpFake = function(guestCode, rsvp) {
        var defer = $q.defer();
        defer.resolve({
          data: {
            success: true
          }
        });
        return defer.promise;
      };

      var saveRsvpReal = function(guestCode, rsvp) {
        return $http({
          method: 'PUT',
          url: baseUrl + 'rsvp/' + guestCode,
          data: rsvp
        });
      };

      return {
        loadRsvp: loadRsvpFake,
        saveRsvp: saveRsvpFake
      };
    }
  ]);