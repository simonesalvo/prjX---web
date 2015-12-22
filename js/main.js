var myApp = angular.module('XApp', ['ngMaterial']);

myApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/userFeedback', {
        templateUrl: 'pages/userFeedback.html',
        controller: 'userFeedbackCtrl',
      })
      .when('/goodsCreation', {
        templateUrl: 'pages/goodsCreation.html',
        controller: 'goodsCreationCtrl',
      })
      .when('/userGoods', {
        templateUrl: 'pages/userGoods.html',
        controller: 'userGoodsCtrl',
      })
      .when('/userProfile', {
        templateUrl: 'pages/userProfile.html',
        controller: 'userProfileCtrl',
       })
      .when('/applicationMain', {
        templateUrl: 'pages/applicationMain.html',
        controller: 'applicationMainCtrl',
       })
      .when('/applicationGoods', {
        templateUrl: 'pages/applicationGoods.html',
        controller: 'applicationGoodsCtrl',
       })

    $locationProvider.html5Mode(true);
}])

myApp.controller('loginCtrl', ['$scope', '$location' function($scope) {
$scope.user = {};
$scope.user.email = '';
$scope.user.pwd = '';


$scope.loginClick = function(){
console.log('login clicked!!');
};

$scope.signupClick = function(){
console.log('signup clicked!!');

};

}]);