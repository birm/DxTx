module.controller("Home", ['$scope'], function($scope){

});

module.controller("ExpandItem", ['$scope'], function($scope){

});

module.controller("Info", ['$scope', 'weather'], function($scope){
  $scope.weather = weather.weather()
});

module.service('weather', function() {
    this.data = "73 degrees and sunny"
    this.weather = function(){
      return this.data;
    }
});
