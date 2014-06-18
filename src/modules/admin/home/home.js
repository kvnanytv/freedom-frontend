angular.module('userdashboard.overview', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/overview',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'modules/home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope ) {
  console.log("asd");
})
;

