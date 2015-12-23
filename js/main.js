var myApp = angular.module('XApp', ['ngMaterial','ngMdIcons','ngRoute']);

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
      .when('/availableGoods', {
        templateUrl: 'pages/availableGoods.html',
        controller: 'availableGoodsCtrl',
      })
      .when('/userProfile', {
        templateUrl: 'pages/userProfile.html',
        controller: 'userProfileCtrl',
       })
      .when('/applicationMain', {
        templateUrl: 'pages/applicationMain.html',
        controller: 'applicationMainCtrl',
       })
       .when('/applicationLogin', {
         templateUrl: 'pages/applicationLogin.html',
         controller: 'applicationLoginCtrl',
       })
}])

myApp.controller('appCtrl', ['$scope', '$location', function($scope, $location) {
$scope.user = {};
$scope.user.email = '';
$scope.user.pwd = '';

$scope.moveLoginPage = function(){
$location.path('/applicationLogin');
};

$scope.loginClick = function(){
console.log('login clicked!!');
};

$scope.signupClick = function(){
console.log('signup clicked!!');

};

}]);