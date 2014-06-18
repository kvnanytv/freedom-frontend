angular.module( 'ui.freedom.user', [
  'userdashboard.profile',
  'userdashboard.overview',
  'userdashboard.config',

  'template-module'
])
.config( function ( $stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise( '/overview' );
  /**** THIS CONFIG IS FOR REMOVING THE EXTRA HEADER ANGULAR SEND IN AJAX CALLS(HTTP) ***/ 
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  /*** END ****/
})
.run( function run () {
})
.controller( 'userController', function ( $scope) {
  console.log("run!!!");
})
;
