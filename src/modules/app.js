console.log(module);
angular.module( 'ui.freedom', [
  'ui.router',
  'ui.bootstrap',
  module
])
.controller( 'mainController', function ($scope, $timeout) {
  $scope.navCollapse = 1;
  $scope.navStyle = {
    height:'1px'
  };
  $scope.test = "asd";
  $scope.toggleNav = function() {
    console.log($scope.navCollapse);
    if($scope.navCollapse==3) {
      $scope.navCollapse = 1;
    }
    else {
      $scope.navCollapse = 2;
      $scope.navStyle = {
        height:'147px'
      };
      $timeout(function(){
        $scope.navCollapse = 3;
        $scope.navStyle = {
          height:'1px'
        };
      }, 500);
    }
  };
})
;
