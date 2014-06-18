angular.module('userdashboard.overview', [])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/overview',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'modules/user/home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'homeController', function ( $scope ) {
  console.log("asd");
})
;

