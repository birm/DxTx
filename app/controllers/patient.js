module.controller("Patients", ['$scope', 'mypatients'], function($scope){

});

module.service('mypatients', function() {
    this.data = 1
});

module.controller("PatientCreate", ['$scope', 'patientcollision'], function($scope){

});

module.service('patientcollision', function() {
    this.data = 1
});

module.controller("PatientView", ['$scope', 'patientview'], function($scope){

});

module.service('patientview', function() {
    this.data = 1
});
