module.controller("Home", ['$scope'], function($scope){

});

module.controller("ExpandItem", ['$scope'], function($scope){

});

module.controller("Info", ['$scope', 'WeatherService'], function($scope){
  $scope.weather = WeatherService.weather()
});

module.service('WeatherService', function() {
    this.data = "73 degrees and sunny"
    this.weather = function(){
      return this.data;
    }
});
