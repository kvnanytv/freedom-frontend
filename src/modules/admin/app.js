var existingModules = [
  'ui.router'
];
angular.forEach(modules, function(mod) {
  existingModules.push(mod);
});
console.log("Modules loaded @: "+ new Date(), existingModules);
angular.module( 'ui.freedom', existingModules)
.config( function ( $stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise( '/overview' );
  
  /**** THIS CONFIG IS FOR REMOVING THE EXTRA HEADER ANGULAR SEND IN AJAX CALLS(HTTP) ***/ 
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  /*** END ****/
})
.run( function run () {
})
.controller( 'mainController', function ( $scope) {
  console.log("run!!!");
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ' ;
    }
  });
})
;