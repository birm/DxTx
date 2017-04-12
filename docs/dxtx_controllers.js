var module = angular.module("dxtx", []);


module.controller("ChartCreate", ['$scope'], function($scope) {

});

module.controller("ChartView", ['$scope', 'ChartViewService', function($scope, ChartViewService) {
  $scope.chart = ChartViewService.chart();

}]);


module.controller("Charts", ['$scope', 'ChartService', function($scope, ChartService) {
  $scope.charts = ChartService.charts();
  $scope.chart_search = ChartService.chart_search($scope.search);

}]);

module.controller("Reminder", ['$scope', 'ReminderService',  function($scope, ReminderService) {
    $scope.reminder_search = ReminderService.reminder_search($scope.search);
}]);

module.controller("Info", ['$scope', 'WeatherService', function($scope, WeatherService) {
  $scope.weather = WeatherService.weather()
}]);

module.controller("Login", ['$scope', 'LoginService'], function($scope, LoginService) {
  $scope.uid = LoginService.login();
  $scope.token = LoginService.token();
});


module.controller("Patients", ['$scope', 'mypatients', function($scope, mypatients) {
  $scope.patients = mypatients.patients();
  $scope.patient_search = mypatients.patient_search($scope.search);
}]);

module.controller("Metrics", ['$scope', 'MetricService', function($scope, MetricService) {
  $scope.metrics = MetricService.metrics();
  $scope.metric_search = MetricService.metric_search($scope.search);
}]);

module.controller("PatientCreate", ['$scope', 'patientcollision', function($scope, patientcollision) {
  $scope.others = patientcollision.same
}]);


module.controller("PatientView", ['$scope', 'patientview', function($scope, patientview) {
  $scope.patient = patientview.patientinfo();
}]);



module.controller("Visualization", ["$scope", "GraphService", function($scope, GraphService) {
  $scope.VisController = function() {
    GraphService()
  }
}]);
