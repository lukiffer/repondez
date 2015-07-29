angular.module('repondez', [])
  .controller('RsvpController', ['$scope', '$location', '$api',
    function($scope, $location, $api) {
      
      var guestCode = $location.absUrl();
      guestCode = guestCode.substr(guestCode.indexOf('rsvp/') + 5);
      guestCode = guestCode.replace('/', '');

      $api.loadRsvp(guestCode).then(function (response) {
        $scope.rsvp = response.data;
      }, function (error) {
        $scope.rsvp = null;
        $scope.error = error;
      });

      $scope.save = function() {
        $api.saveRsvp($scope.rsvp).then(function (response) {
          
        }, function (error) {
          $scope.rsvp = null;
          $scope.error = error;
        });
      };
    }
  ]);