var module = angular.module("dxtx", []);


module.controller("ChartCreate", ['$scope'], function($scope) {

});

module.controller("ChartView", ['$scope', 'ChartViewService', function($scope, ChartViewService) {
  $scope.chart = ChartViewService.chart();

}]);


module.controller("Charts", ['$scope', 'ChartService', function($scope, ChartService) {
  $scope.charts = ChartService.charts();

}]);

module.service('ChartService', function() {
  this.data = [{
    id: 1,
    title: "basic test intake",
    questions: [{
        text: "How do you feel today?",
        type: "paragraph",
        answer: "Describe your body feel in general terms."
      },
      {
        text: "Why did you come in?",
        type: "paragraph",
        validation: ["nonempty"],
        answer: "Describe your motivation for coming in"
      }
    ],
    permissions: [{
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  }]
  this.charts = function() {
    return this.data;
  }
});

module.controller("Home", ['$scope', function($scope) {
    []
}]);

module.controller("Reminder", ['$scope', 'ReminderService',  function($scope, ReminderService) {
    []
}]);

module.controller("ExpandItem", ['$scope', function($scope) {
    []
}]);

module.controller("Info", ['$scope', 'WeatherService', function($scope, WeatherService) {
  $scope.weather = WeatherService.weather()
}]);

module.service('WeatherService', function() {
  this.data = "73 degrees and sunny"
  this.weather = function() {
    return this.data;
  }
});

module.controller("Login", ['$scope', 'LoginService'], function($scope, LoginService) {
  $scope.uid = LoginService.login();
  $scope.token = LoginService.token();
});


module.controller("Patients", ['$scope', 'mypatients', function($scope, mypatients) {
  $scope.patients = mypatients.patients();
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
