myApp.controller('availableGoodsCtrl', ['$scope',  '$location',
function($scope, $location) {

$scope.goods = {};
$scope.filteredGoods = {};

// Available goods are divided by the following category:
// - requiring user (we will get the goods of the logged user)
// - keyword (we will get the goods by filtering the keyword on the goods title)

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
    });*/
}

$scope.applyGoodsFilter = function(filter){

}
}]);