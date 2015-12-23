myApp.controller('goodsCreationCtrl', ['$scope', '$location',
function($scope, $location) {
$scope.getAvailableGoods = function(filterKey, filterValue, $http){
    // Simple GET request example:
 /*   $http({
      method: 'POST',
      params: {filterKey: filterValue}
      url: '/someUrl'
    }).success(function(data, status, headers, config) {
    // this callback will be called asynchronously // when the response is available
    })
    .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs // or server returns response with an error status.
    });*/
}

}]);

myApp.directive('apsUploadFile', apsUploadFile);

      function apsUploadFile() {
        var directive = {
          restrict: 'E',
          template: '<input id="fileInput" type="file" class="ng-hide"> <md-button id="uploadButton" class="md-raised md-primary" aria-label="attach_file">    Choose file </md-button><md-input-container  md-no-float>    <input id="textInput" ng-model="fileName" type="text" placeholder="No file chosen" ng-readonly="true"></md-input-container>',
          link: apsUploadFileLink
        };
        return directive;
      }

      function apsUploadFileLink(scope, element, attrs) {
        var input = $(element[0].querySelector('#fileInput'));
        var button = $(element[0].querySelector('#uploadButton'));
        var textInput = $(element[0].querySelector('#textInput'));

        if (input.length && button.length && textInput.length) {
          button.click(function(e) {
            input.click();
          });
          textInput.click(function(e) {
            input.click();
          });
        }

        input.on('change', function(e) {
          var files = e.target.files;
          if (files[0]) {
            scope.fileName = files[0].name;
          } else {
            scope.fileName = null;
          }
          scope.$apply();
        });
      }