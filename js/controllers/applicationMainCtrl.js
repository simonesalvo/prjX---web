myApp.controller('applicationMainCtrl', ['$scope', '$location',
function($scope, $location) {

$scope.moveUsrProfile = function(){
$location.path('/userProfile');
};

$scope.moveGoodCreation = function(){
$location.path('/goodsCreation');
}

}]);