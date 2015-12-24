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
          restrict: '',
          templateUrl: '../web/pages/templates/uploadFile.html',
          link: apsUploadFileLink
        };
        return directive;
      }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#loadImageImg').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
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
          readURL(e.target);
        });
      }