
module.controller("Patients", ['$scope', 'mypatients'], function($scope){
});

module.service('mypatients', function() {
    this.patients =  [
    {
    id: 1,
    name: "Pete Patient",
    DOB: "01/01/1991",
    permissions: [
      {
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
    }
  ]
});

module.controller("PatientCreate", ['$scope', 'patientcollision'], function($scope){

});

module.service('patientcollision', function() {
    this.data = 1
});

module.controller("PatientView", ['$scope', 'patientview'], function($scope){

});

module.service('patientview', function() {
    this.patient = {
    id: 1,
    name: "Pete Patient",
    DOB: "01/01/1991",
    permissions: [
      {
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
    }
});
