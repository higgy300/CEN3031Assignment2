angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.show = false;
    $scope.form ={};

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.form);
      $scope.form = {};
      $scope.show = !$scope.show;
    };


    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
      /*let newListings = [];
        newListings = $scope.listings.filter(function (index) {
          let name = listing.name;
          let code = listing.code;

        });
        $scope.listings = newListings;
        $scope.detailedInfo = undefined;*/
    };


    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };


    $scope.clickListener = function() {
      $scope.show = !$scope.show;
    };
  }
]);
