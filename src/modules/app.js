angular.module( 'ui.freedom', [
  'ui.router',
  'ui.freedom.user'
])
.controller( 'mainController', function ( $scope) {
  console.log("run!!!");
})
;
