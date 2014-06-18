console.log(module);
angular.module( 'ui.freedom', [
  'ui.router',
  module
])
.controller( 'mainController', function ( $scope) {
  console.log('mainController');
})
;
