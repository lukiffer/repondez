angular.module('repondez', [])
  .controller('RsvpController', ['$scope', '$location', '$api',
    function($scope, $location, $api) {
      
      var guestCode = $location.absUrl();
      guestCode = guestCode.substr(guestCode.indexOf('rsvp/') + 5);
      guestCode = guestCode.replace('/', '');

      if (guestCode) {
        $api.loadRsvp(guestCode).then(function (response) {
          $scope.rsvp = response.data;

        }, function (error) {
          $scope.rsvp = null;
          $scope.error = error;
        });  
      }
      else {
        $scope.input = true;
      }

      $scope.submitGuestCode = function(guestCode) {
        location.href = '/rsvp/' + guestCode;
      };

      $scope.save = function() {
        $api.saveRsvp(guestCode, $scope.rsvp).then(function (response) {
          $scope.message = true;
        }, function (error) {
          $scope.rsvp = null;
          $scope.error = error;
        });
      };
    }
  ]);