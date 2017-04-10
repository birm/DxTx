module.controller("Login", ['$scope', 'logincheck'], function($scope){

});

module.service('logincheck', function() {
    this.user = 1
    this.login = function(){
      return this.user;
    }
});
