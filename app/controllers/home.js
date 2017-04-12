module.controller("Home", ['$scope'], function($scope) {

});

module.controller("Reminder", ['$scope'], function($scope) {

});

module.service('ReminderService', function() {
    this.reminders = [
      {
      id: 1,
      heading: "Add Physicians",
      text: "Need to add the Physicians to the app",
      due: "10/10/2017",
      owner: 1
      },
      {
      id: 2,
      heading: "Add Patients",
      text: "Need to add the Patients to the app",
      due: "10/1/2017",
      owner: 2
      }
    ]
    this.reminders = function() {
        return this.reminders
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
