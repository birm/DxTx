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
    this.match = 1
    this.same = funcion() {
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
