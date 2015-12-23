myApp.controller('applicationLoginCtrl', ['$scope', '$location',

function($scope, $location) {
$scope.user = {};
$scope.user.email = '';
$scope.user.pwd = '';

$scope.loginClick = function(){
$location.path('/applicationMain');
console.log('login clicked!!');
};

$scope.signupClick = function(){
$location.path('/applicationMain');
console.log('signup clicked!!');

};

}]);