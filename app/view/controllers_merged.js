module.controller("ChartCreate", ['$scope'], function($scope) {

});

module.controller("ChartView", ['$scope', 'ChartViewService'], function($scope) {
    $scope.chart = ChartViewService.chart();

});

module.service('ChartViewService', function() {
    this.data = {
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
    };
    this.chart = function() {
        return this.data;
    }
});

module.controller("Charts", ['$scope', 'ChartService'], function($scope) {
    $scope.charts = mycharts.charts();

});

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

module.controller("Login", ['$scope', 'LoginService'], function($scope) {
    $scope.uid = LoginService.login();
    $scope.token = LoginService.token();
});

module.service('LoginService', function() {
    this.user = 1
    this.login = function() {
        return this.user;
    }
    this.token = function() {
        return 1;
    }
});

module.controller("Patients", ['$scope', 'mypatients'], function($scope) {
    $scope.patients = mypatients.patients();
});

module.service('mypatients', function() {
    this.patientlist = [{
        id: 1,
        name: "Pete Patient",
        DOB: "01/01/1991",
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
    this.patients = function() {
        return this.patientlist;
    }
});

module.controller("PatientCreate", ['$scope', 'patientcollision'], function($scope) {
    $scope.others = patientcollision.same
});

module.service('patientcollision', function() {
    this.match = 1;
    this.same = function() {
        return this.match;
    }

});

module.controller("PatientView", ['$scope', 'patientview'], function($scope) {
    $scope.patient = patientview.patientinfo();
});

module.service('patientview', function() {
    this.patient = {
        id: 1,
        name: "Pete Patient",
        DOB: "01/01/1991",
        permissions: [{
                user: 2,
                level: "owner"
            },
            {
                user: 1,
                level: "edit"
            }
        ]
    }
    this.patientinfo = function() {
        return this.patient;
    }
});

module.controller("Visualization", ['$scope', 'GraphService'], function($scope) {
    $scope.VisController = function(userid, token, len) {
        GraphService(userid, token, len)
    }
});

module.factory('GraphService', function() {
    var graph = {}
    graph.randomArray = (len) => [...new Array(length)].map(() => Math.random());
    graph.data = randomArray(len);
    return graph
});
