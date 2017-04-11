module.controller("Home", ['$scope'], function($scope) {

});

module.controller("Reminder", ['$scope'], function($scope) {

});

module.service('ReminderService', function() {
    this.data = [["Add Physicians", "10/1/2017"]]
    this.weather = function() {
        return this.data
    }
    this.
});

module.controller("ExpandItem", ['$scope'], function($scope) {

});

module.controller("Info", ['$scope', 'WeatherService'], function($scope) {
    $scope.weather = WeatherService.weather()
});

module.service('WeatherService', function() {
    this.data = "73 degrees and sunny"
    this.weather = function() {
        return this.data;
    }
});
