angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {};

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
        $scope.listings.push($scope.newListing);
        $scope.newListing = {};
    };
    $scope.deleteListing = function(listing) {
        var index = $scope.listings.indexOf(listing);
        $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(listing) {
        var index = $scope.listings.indexOf(listing);
        $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
