module.controller("Login", ['$scope', 'LoginService'], function($scope){
  $scope.uid = LoginService.login();
  $scope.token = LoginService.token();
});

module.service('LoginService', function() {
    this.user = 1
    this.login = function(){
      return this.user;
    }
    this.token = function(){
      return 1;
    }
});
