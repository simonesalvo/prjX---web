//
// A feedback object is done as following:
// it will contain a number of 'stars' and a comment (optionally)
//

myApp.controller('userFeedbackCtrl', ['$scope', '$location',
function($scope, $location) {


// The following object will contain 1 feedback
$scope.givenFeedback = {};
$scope.receivedFeedback = {};

// Getting received feedback 15 by 15
$scope.getReceivedFeedback = function(){

};

$scope.getAvailableGoods = function(filterKey, filterValue, $http){
    // Simple GET request example:
 /*   $http({
      method: 'GET',
      params: {filterKey: filterValue}
      url: '/someUrl'
    }).success(function(data, status, headers, config) {
    // this callback will be called asynchronously // when the response is available
    })
    .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs // or server returns response with an error status.
    });*/
};


// Getting given feedback 15 by 15
$scope.getGivenFeedback = function(){

};

$scope.getAvailableGoods = function(filterKey, filterValue, $http){
    // Simple GET request example:
   /* $http({
      method: 'GET',
      params: {filterKey: filterValue}
      url: '/someUrl'
    }).success(function(data, status, headers, config) {
    // this callback will be called asynchronously // when the response is available
    })
    .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs // or server returns response with an error status.
    });
    */
};

}]);